<template>
  <div class="signup">
    <div class="signup__content container container--sign">
      <div class="signup__title">
        <h2>Regístrate ahora</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </p>
      </div>
      <form>
        <!--Name a lastname-->
        <div class="grid col-2 mb-2">
          <div class="form-group">
            <label>Nombres *</label>
            <input v-model="client.name" type="text" @blur="$v.client.name.$touch()">
            <div v-if="$v.client.name.$error">
              <span v-if="!$v.client.name.required" class="form-group__error">Este campo es requerido</span>
              <span v-if="!$v.client.name.maxLength" class="form-group__error">
                Deben ser máximo {{ $v.client.name.$params.maxLength.max }} caracteres
              </span>
              <span v-if="!$v.client.name.minLength" class="form-group__error">
                Deben ser mínimo {{ $v.client.name.$params.minLength.min }} caracteres
              </span>
            </div>
          </div>
          <div class="form-group">
            <label>Apellidos *</label>
            <input v-model="client.lastName" type="text" @blur="$v.client.lastName.$touch()">
            <div v-if="$v.client.lastName.$error">
              <span v-if="!$v.client.lastName.required" class="form-group__error">Este campo es requerido</span>
              <span v-if="!$v.client.lastName.maxLength" class="form-group__error">
                Deben ser máximo {{ $v.client.lastName.$params.maxLength.max }} caracteres
              </span>
              <span v-if="!$v.client.lastName.minLength" class="form-group__error">
                Deben ser mínimo {{ $v.client.lastName.$params.minLength.min }} caracteres
              </span>
            </div>
          </div>
        </div>
        <!--End-->
        <!--Document-->
        <div class="grid col-2 mb-2">
          <div class="form-group">
            <label for="typeDocument">Tipo de documento*</label>
            <select id="typeDocument" v-model="client.typeDocument" class="select" name="typeDocument">
              <option value="DNI">
                DNI
              </option>
              <option value="CE">
                CE
              </option>
              <option value="Pasaporte">
                Pasaporte
              </option>
            </select>
            <div v-if="$v.client.typeDocument.$error">
              <span v-if="!$v.client.typeDocument.required" class="form-group__error">Este campo es requerido</span>
            </div>
          </div>
          <div class="form-group">
            <label>Documento *</label>
            <input v-model="client.document" type="text" @blur="$v.client.document.$touch()">
            <div v-if="$v.client.document.$error">
              <span v-if="!$v.client.document.required" class="form-group__error">Este campo es requerido</span>
              <span v-if="!$v.client.document.maxLength" class="form-group__error">
                Deben ser máximo {{ $v.client.document.$params.maxLength.max }} caracteres
              </span>
              <span v-if="!$v.client.document.minLength" class="form-group__error">
                Deben ser mínimo {{ $v.client.document.$params.minLength.min }} caracteres
              </span>
            </div>
          </div>
        </div>
        <!--End-->
        <!--Phone-->
        <div class="form-group">
          <label for="phone">Celular *</label>
          <input id="phone" v-model="client.phone" type="tel" @blur="$v.client.phone.$touch()">
          <div v-if="$v.client.phone.$error">
            <span v-if="!$v.client.phone.required" class="form-group__error">Este campo es requerido</span>
            <span v-if="!$v.client.phone.maxLength" class="form-group__error">
              Deben ser máximo {{ $v.client.phone.$params.maxLength.max }} caracteres
            </span>
            <span v-if="!$v.client.phone.minLength" class="form-group__error">
              Deben ser mínimo {{ $v.client.phone.$params.minLength.min }} caracteres
            </span>
          </div>
        </div>
        <!--End-->
        <!--User and password-->
        <h3>Crea tu cuenta</h3>
        <div class="grid col-2">
          <div class="form-group">
            <label for="email">Email *</label>
            <input id="email" v-model="user.email" type="email" @blur="$v.user.email.$touch()">
            <div v-if="$v.user.email.$error">
              <span v-if="!$v.user.email.required" class="form-group__error">Este campo es requerido</span>
              <span v-if="!$v.user.email.email" class="form-group__error">Formato de email incorrecto</span>
              <span v-if="!$v.user.email.maxLength" class="form-group__error">
                Deben ser máximo {{ $v.user.email.$params.maxLength.max }} caracteres
              </span>
              <span v-if="!$v.user.email.minLength" class="form-group__error">
                Deben ser mínimo {{ $v.user.email.$params.minLength.min }} caracteres
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="password">Contraseña *</label>
            <input id="password" v-model="user.password" type="password" @blur="$v.user.password.$touch()">
            <div v-if="!showPassword" class="toggle-password" id="showPassword" @click="togglePassword">
              <client-only>
                <ion-icon name="eye-outline"></ion-icon>
              </client-only>
            </div>
            <div v-if="showPassword" class="toggle-password" id="hidePassword" @click="togglePassword">
              <client-only>
                <ion-icon name="eye-off-outline"></ion-icon>
              </client-only>
            </div>
            <div v-if="$v.user.password.$error">
              <span v-if="!$v.user.password.required" class="form-group__error">Este campo es requerido</span>
              <span v-if="!$v.user.password.maxLength" class="form-group__error">
                Deben ser máximo {{ $v.user.password.$params.maxLength.max }} caracteres
              </span>
              <span v-if="!$v.user.password.minLength" class="form-group__error">
                Deben ser mínimo {{ $v.user.password.$params.minLength.min }} caracteres
              </span>
            </div>
          </div>
        </div>
        <!--End-->
        <!--Errors-->
        <div>
          <span v-for="(e, index) in errors" :key="index" class="form-group__error">
            {{ e }}
          </span>
        </div>
        <!--End-->
        <!--Button-->
        <button
          type="button"
          :disabled="this.$v.$invalid || this.progress"
          class="mt-3 btn btn--primary"
          @click="toggleTerms">
          <span v-if="!progress">Registrarme</span>
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
                <h4 class="text-left">
                  Derechos del usuario de este sitio
                </h4> <br>
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                  commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
                <br><br>
                <h4 class="text-left">
                  Derechos del usuario de este sitio
                </h4> <br>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                  consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                  of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                  book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                  Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.
                </p>
                <br><br>
                <h4 class="text-left">
                  Procedimiento para hacer uso de este sitio internet
                </h4> <br>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                  Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in
                  their exact original form, accompanied by English versions from the 1914 translation by H.
                  Rackham.
                </p>
                <br><br>
                <h4 class="text-left">
                  Despacho de productos
                </h4> <br>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don’t look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t
                  anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                  tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                  It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                  to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                  from repetition, injected humour, or non-characteristic words etc.
                </p>
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
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

export default {
  middleware: 'signup',
  name: 'Signup',
  layout: 'blue',
  data () {
    return {
      client: {
        name: '',
        lastName: '',
        typeDocument: '',
        document: '',
        phone: ''
      },
      user: {
        email: '',
        password: ''
      },
      errors: [],
      progress: false,
      terms: false,
      actionCodeSettings: {
        url: 'http://192.168.1.128:3000/'
      },
      showPassword: false
    }
  },
  validations: {
    client: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(60)
      },
      lastName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(60)
      },
      typeDocument: {
        required
      },
      document: {
        minLength: minLength(6),
        maxLength: maxLength(20)
      },
      phone: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15)
      }
    },
    user: {
      email: {
        email,
        required,
        minLength: minLength(5),
        maxLength: maxLength(50)
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  },
  methods: {
    async submit () {
      try {
        this.$v.client.$touch()
        this.$v.user.$touch()
        if (!this.$v.$invalid) {
          this.toggleTerms()
          this.progress = true
          await this.$fireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password)
          const user = this.$fireAuth.currentUser
          await user.updateProfile({
            displayName: this.client.name + ' ' + this.client.lastName
          })
          await user.sendEmailVerification()
          await this.$fireStore.collection('clients').add({
            ...this.client,
            createdAt: this.$fireStoreObj.FieldValue.serverTimestamp(),
            approve: false,
            state: true,
            uid: user.uid
          })
          await this.$router.push({ name: 'thanks' })
          await this.$fireAuth.signOut()
          this.progress = false
        }
      } catch (error) {
        this.progress = false
        if (error.code === 'auth/email-already-in-use') {
          const error = 'Email ya ha sido utilizado en otra cuenta.'
          this.errors.push(error)
        } else if (error.code === 'auth/invalid-email') {
          const error = 'El email es inválido.'
          this.errors.push(error)
        } else if (error.code === 'aauth/weak-password') {
          const error = 'El password no es lo suficientemente seguro.'
          this.errors.push(error)
        } else {
          const error = 'Hubo un error, por favor ponte en contacto con nosotros.'
          this.errors.push(error)
        }
      }
    },
    toggleTerms () {
      document.body.classList.toggle('body--disabledScroll')
      const popTerms = document.getElementById('popTerms')
      popTerms.classList.toggle('show')
    },
    togglePassword () {
      this.showPassword = !this.showPassword
      const pass = document.getElementById('password')
      if (pass.type === 'password') {
        pass.type = 'text'
      } else {
        pass.type = 'password'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/signup";
  @import "../assets/scss/components/terms";
</style>
