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
        <div class="form-group mb-2">
          <label for="credit">Crédito a solicitar en dólares * (Es solo referencial y será sujeto a evaluación)</label>
          <input v-model.number="requestCredit.credit" class="input" type="text" id="credit">
        </div>
        <div class="form-group mb-2">
          <label for="observation">Observación</label>
          <textarea v-model="requestCredit.observation" rows="5" class="textarea" id="observation"></textarea>
        </div>
        <div>
          <span v-for="(e, index) in errors" :key="index" class="form-group__error">
          {{ e }}
        </span>
        </div>
        <!--Button-->
        <button
          type="button"
          :disabled="this.$v.$invalid || this.progress"
          class="btn btn--primary"
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
            <div class="mt-2 mb-2 text-right" @click="toggleTerms">
              <ion-icon name="close-circle-outline"/>
            </div>
            <div>
              <h2 class="text-center mb-4">
                Términos y condiciones
              </h2>
              <div class="terms-section">
                <span v-html="$store.state.content.data"></span>
              </div>
            </div>
            <div class="terms__accept">
              <span class="signup__terms">
                <input id="terms" v-model="terms" type="checkbox">
                He leído y acepto los <nuxt-link to="/terms" class="primary-color" target="_blank"> Términos y condiciones</nuxt-link>
              </span>
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
      terms: false
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
        if (!this.$v.$invalid) {
          this.toggleTerms()
          this.progress = true
          const user = this.$store.state.user.data
          // Get client
          let client = null
          const querySnapClient = await this.$fireStore.collection('clients').where('uid', '==', user.uid).get()
          querySnapClient.forEach((c) => {
            client = {
              id: c.id,
              ...c.data()
            }
          })
          if (client) {
            await this.$fireStore.collection('requests').add({
              client: {
                id: client.id,
                name: client.name,
                lastName: client.lastName,
                document: client.document
              },
              credit: this.requestCredit.credit,
              approve: false,
              observation: this.requestCredit.observation ? this.requestCredit.observation : '',
              createdAt: this.$fireStoreObj.FieldValue.serverTimestamp()
            })
            await this.$router.push({ name: 'thanksRequest' })
            this.progress = false
          }
        }
      } catch (e) {
        this.progress = false
        const error = 'Hubo un error, por favor ponte en contacto con nosotros.'
        this.errors.push(error)
      }
    },
    toggleTerms () {
      document.body.classList.toggle('body--disabledScroll')
      const popTerms = document.getElementById('popTerms')
      popTerms.classList.toggle('show')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/signup";
  @import "../assets/scss/components/terms";
</style>
