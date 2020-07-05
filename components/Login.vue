<template>
  <div class="login" :class="{'show' : toggleLogin}">
    <div class="login__shadow"/>
    <div class="login__container">
      <div class="login__close" @click="close">
        <client-only>
          <ion-icon name="close-circle-outline"/>
        </client-only>
      </div>
      <!--Login-->
      <div v-if="!resetPassword" class="login__form">
        <h2 class="text-center">¿Ya tienes una cuenta?</h2>
        <p class="text-center mt-1">
          Es bueno tenerte de vuelta
        </p>
        <div class="form-group mt-4">
          <label for="email">Email</label>
          <input id="email" v-model="email" class="input" type="text" @blur="$v.email.$touch()">
          <div v-if="$v.email.$error">
            <span v-if="!$v.email.email" class="form-group__error">Email inválido</span>
            <span v-if="!$v.email.required" class="form-group__error">Este campo es requerido</span>
            <span v-if="!$v.email.maxLength" class="form-group__error">Deben ser máximo 40 caracteres.</span>
          </div>
        </div>
        <div class="form-group mt-2">
          <label for="password2">Contraseña</label>
          <input
            id="password2"
            v-model="password"
            class="input"
            type="password"
            @blur="$v.password.$touch()"
            @keypress.enter="login">
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
          <div v-if="$v.password.$error">
            <span v-if="!$v.password.required" class="form-group__error">Este campo es requerido</span>
            <span v-if="!$v.password.minLength" class="form-group__error">Deben ser mínimo 6 caracteres.</span>
            <span v-if="!$v.password.maxLength" class="form-group__error">Deben ser máximo 40 caracteres.</span>
          </div>
        </div>
        <div class="login__action" @click="resetPassword =!resetPassword">¿Olvidaste tu contraseña?</div>
        <div v-for="(e,index) in errors" :key="index" class="login__error">
          {{ e }}
        </div>
        <button type="button" @click="login" class="btn btn--primary mt-2">
          <span v-if="!loading">Ingresar</span>
          <div v-else class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
      <!--End Login-->
      <!--Reset Password-->
      <div v-if="resetPassword && !confirmReset" class="login__form">
        <h2 class="text-center">Restablecer contraseña</h2>
        <p class="text-center mt-1">
          Ingresa el email asociado a tu cuenta.
        </p>
        <div class="form-group mt-4">
          <label for="emailReset">Email</label>
          <input id="emailReset" v-model="email" class="input" type="text" @blur="$v.email.$touch()">
          <div v-if="$v.email.$error">
            <span v-if="!$v.email.email" class="form-group__error">Email inválido</span>
            <span v-if="!$v.email.required" class="form-group__error">Este campo es requerido</span>
            <span v-if="!$v.email.maxLength" class="form-group__error">Deben ser máximo 40 caracteres.</span>
          </div>
        </div>
        <div class="login__action" @click="resetPassword =!resetPassword">Ingresar ahora</div>
        <div v-for="(e,index) in errors" :key="index" class="login__error">
          {{ e }}
        </div>
        <button type="button" @click="reset" class="btn btn--primary mt-2">
          <span v-if="!loading">Enviar</span>
          <div v-else class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
      <!--End-->
      <!--Confirm Reset-->
      <div v-if="confirmReset">
        <h2 class="text-center mt-4">Hemos enviado un link a tu email</h2>
        <p>Sigue los pasos indicados para restablecer tu contraseña.</p>
        <button type="button" @click="confirm" class="btn btn--primary mt-2">
          <span v-if="!loading">Ingresar</span>
        </button>
      </div>
      <!---End-->
    </div>
  </div>
</template>

<script>
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      errors: [],
      loading: false,
      showPassword: false,
      resetPassword: false,
      confirmReset: false
    }
  },
  validations: {
    email: {
      required,
      email,
      maxLength: maxLength(40)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(40)
    }
  },
  computed: {
    toggleLogin () {
      return this.$store.state.content.login
    }
  },
  methods: {
    close () {
      this.$store.dispatch('content/toggleLogin')
    },
    async login () {
      try {
        this.errors = []
        this.$v.email.$touch()
        this.$v.password.$touch()
        if (!this.$v.$invalid) {
          this.loading = true
          await this.$fireAuth.signInWithEmailAndPassword(this.email, this.password)
          const user = this.$fireAuth.currentUser
          if (!user.emailVerified) {
            await this.$fireAuth.signOut()
            const error = 'Aún no has verificado tu dirección de correo electrónico'
            this.loading = false
            this.errors.push(error)
          } else {
            const obj = {
              displayName: user.displayName,
              email: user.email,
              emailVerified: user.emailVerified,
              uid: user.uid
            }
            this.$store.dispatch('user/setUser', { user: obj })
            this.$router.push('/')
            this.loading = false
            this.close()
          }
        }
      } catch (e) {
        const errorCode = e.code
        if (errorCode === 'auth/invalid-email') {
          const error = 'Email inválido'
          this.errors.push(error)
        }
        if (errorCode === 'auth/user-not-found') {
          const error = 'Email no se encuentra registrado'
          this.errors.push(error)
        }
        if (errorCode === 'auth/wrong-password') {
          const error = 'Contraseña inválida'
          this.errors.push(error)
        }
        this.loading = false
      }
    },
    async reset () {
      try {
        const actionCodeSettings = {
          url: process.env.BASE_URL + '?email=' + this.email
        }
        this.loading = true
        await this.$fireAuth.sendPasswordResetEmail(this.email, actionCodeSettings)
        this.loading = false
        this.confirmReset = true
      } catch (e) {
        console.log(e)
        this.loading = false
        const error = 'Error al restablecer contraseña'
        this.errors.push(error)
      }
    },
    confirm () {
      this.loading = false
      this.resetPassword = false
      this.confirmReset = false
    },
    togglePassword () {
      this.showPassword = !this.showPassword
      const pass = document.getElementById('password2')
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
  @import "assets/scss/components/login";
</style>
