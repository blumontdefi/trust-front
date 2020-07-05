<template>
  <div class="signup">
    <div class="signup__content container container--sign">
      <div class="signup__title">
        <h2>Solicita un crédito</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
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
        <span class="signup__terms">
          <input v-model="terms" type="checkbox" id="terms">
          He leído y acepto los <a class="primary-color" @click="toggleTerms"> Términos y condiciones</a>
        </span>
        <div>
          <span v-for="(e, index) in errors" :key="index" class="form-group__error">
          {{ e }}
        </span>
        </div>
        <!--Button-->
        <button
          type="button"
          :disabled="this.$v.$invalid || this.progress || !this.terms"
          class="mt-3 btn btn--primary"
          @click="submit">
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
        <div class="terms" id="popTerms">
          <div class="block">
            <div class="mt-2 mb-2 text-right" @click="toggleTerms">
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <div>
              <h2 class="text-center mb-4">Términos y condiciones</h2>
              <div class="terms-section">
                <h4 class="text-left">Derechos del usuario de este sitio</h4> <br>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                  commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                <br><br>
                <h4 class="text-left">Derechos del usuario de este sitio</h4> <br>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                  consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                  of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                  book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                  Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.</p>
                <br><br>
                <h4 class="text-left">Procedimiento para hacer uso de este sitio internet</h4> <br>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                  Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in
                  their exact original form, accompanied by English versions from the 1914 translation by H.
                  Rackham.</p>
                <br><br>
                <h4 class="text-left">Despacho de productos</h4> <br>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don’t look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t
                  anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                  tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                  It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                  to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                  from repetition, injected humour, or non-characteristic words etc.</p>
              </div>
            </div>
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
      haras: {
        required
      },
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
          this.progress = true
          const user = this.$store.state.user.data
          // Get client
          let clientRef = null
          const querySnapClient = await this.$fireStore.collection('clients').where('uid', '==', user.uid).get()
          querySnapClient.forEach((c) => {
            clientRef = {
              id: c.id,
              ...c.data()
            }
          })
          if (clientRef) {
            await this.$fireStore.collection('requestCredits').add({
              client: {
                id: clientRef.id,
                name: clientRef.name
              },
              credit: this.requestCredit.credit,
              state: true,
              observation: this.requestCredit.observation ? this.requestCredit.observation : ''
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
