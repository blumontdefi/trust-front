<template>
  <div class="signup">
    <div class="signup__content container container--sign">
      <div class="signup__title">
        <h2>Solicita un crédito</h2>
        <p>
          Para acceder a un crédito debes pasar por un proceso de evaluación que inicia con en el envío de esta
          solicitud.
        </p>
      </div>
      <form>
        <!--Credit-->
        <div class="form-group mb-2">
          <label for="credit">Crédito a solicitar en dólares * (Es solo referencial y será sujeto a evaluación)</label>
          <input v-model.number="requestCredit.credit" class="input" type="number" id="credit">
        </div>
        <!--End-->
        <!--Observartion-->
        <div class="form-group mb-2">
          <label for="observation">Observación</label>
          <textarea v-model="requestCredit.observation" rows="5" class="textarea" id="observation"></textarea>
        </div>
        <!--End-->
        <div>
          <span v-for="(e, index) in errors" :key="index" class="form-group__error">
          {{ e }}
        </span>
        </div>
        <!--Recaptcha-->
        <recaptcha class="mt-3" @error="onError" @success="onSuccess" @expired="onExpired"/>
        <!--End-->
        <!--Button-->
        <button
          type="button"
          :disabled="this.$v.$invalid || progress || !recaptchaValidate"
          class="btn btn--primary mt-2"
          @click="toggleTerms">
          <span v-if="!progress">Solicitar crédito</span>
          <div v-else class="lds-ellipsis">
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
        </button>
        <!--End-->
        <!--Terms-->
        <div id="popTerms" class="terms">
          <div class="block">
            <div class="mt-1 mb-1 text-right" @click="toggleTerms">
              <ion-icon name="close-circle-outline"/>
            </div>
            <div>
              <h2 class="text-center mb-4">
                Términos y condiciones
              </h2>
              <div class="terms-section">
                <span v-html="$store.state.content.data.terms"></span>
              </div>
            </div>
            <div class="terms__accept">
              <span class="signup__terms">
                <input id="terms" v-model="terms" type="checkbox">
                He leído y acepto los <nuxt-link to="/terms" class="primary-color" target="_blank"> Términos y condiciones</nuxt-link>
              </span>
            </div>
            <div class="terms__accept">
              <a
                class="text-center"
                href="https://firebasestorage.googleapis.com/v0/b/trust-2ed52.appspot.com/o/Terminos%20y%20condiciones%2FT%26C.pdf?alt=media"
                target="_blank">Descargar Términos y Condiciones</a>
            </div>
            <button type="button" :disabled="!terms" class="btn btn--primary" @click="submit">
              Enviar
            </button>
          </div>
        </div>
        <!--End-->
      </form>
    </div>
  </div>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'Request',
  middleware: 'authenticated',
  layout: 'blue',
  data () {
    return {
      requestCredit: {},
      errors: [],
      progress: false,
      terms: false,
      robot: false,
      recaptchaValidate: false
    }
  },
  validations: {
    requestCredit: {
      credit: {
        required,
        numeric
      }
    }
  },
  methods: {
    async submit () {
      try {
        this.$v.requestCredit.$touch()
        const user = this.$fireAuth.currentUser
        if (!user) {
          this.toggleTerms()
          await this.$router.push({ name: 'signup' })
        } else if (!this.$v.$invalid && !this.robot && this.recaptchaValidate && user) {
          this.toggleTerms()
          this.progress = true
          const user = this.$store.state.user.data
          // Get client
          let client = null
          const querySnapClient = await this.$fireStore
            .collection('clients')
            .where('uid', '==', user.uid).get()
          querySnapClient.forEach((c) => {
            client = {
              id: c.id,
              ...c.data()
            }
          })
          if (client) {
            const token = await this.$fireAuth.currentUser.getIdTokenResult()
            const validate = await this.validateIfClientNotCredit(client.id, token.token)
            if (validate) {
              await this.$fireStore.collection('requests').add({
                client: {
                  id: client.id,
                  name: client.name,
                  lastName: client.lastName,
                  document: client.document,
                  typeDocument: client.typeDocument
                },
                credit: this.requestCredit.credit,
                approved: false,
                observation: this.requestCredit.observation ? this.requestCredit.observation : '',
                createdAt: this.$fireStoreObj.FieldValue.serverTimestamp()
              })
              await this.$router.push({ name: 'thanksRequest' })
              this.progress = false
            } else {
              this.errors = []
              this.progress = false
              const error = 'Ya tiene un crédito asignado.'
              this.errors.push(error)
            }
          }
        }
      } catch (e) {
        this.errors = []
        this.progress = false
        const error = 'Hubo un error, por favor ponte en contacto con nosotros.'
        this.errors.push(error)
      }
    },
    validateIfClientNotCredit (clientId, idToken) {
      return new Promise((resolve, reject) => {
        this.$axios.post('https://us-central1-trust-2ed52.cloudfunctions.net/validateCredit', {
          clientId,
          idToken
        }).then((response) => {
          resolve(response.data)
        }).catch((e) => {
          reject(e)
        })
      })
    },
    toggleTerms () {
      document.body.classList.toggle('body--disabledScroll')
      const popTerms = document.getElementById('popTerms')
      popTerms.classList.toggle('show')
    },
    onError () {
      this.robot = true
    },
    onSuccess () {
      this.recaptchaValidate = true
    },
    onExpired () {
      this.recaptchaValidate = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/signup";
  @import "../assets/scss/components/terms";
</style>
