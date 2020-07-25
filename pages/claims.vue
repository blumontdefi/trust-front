<template>
  <div class="claims">
    <div class="claims__content  container container--claims">
      <h2 v-if="!thanks" class="text-center">Libro de reclamaciones</h2>
      <div v-if="!thanks" class="claims__head">
        <h3>CAKC E.I.R.L.</h3>
        <p>20112012886</p>
      </div>
      <div class="claims__thanks" v-if="thanks">
        <div>
          <h4 class="text-center">Tu mensaje fue enviado correctamente.</h4>
          <p class="text-center">Nos pondremos en contacto contigo a la brevedad posible.</p>
          <button @click="goToHome" class="btn btn--primary mt-3">Continuar</button>
        </div>
      </div>
      <div v-if="!thanks" class="claims__forms">
        <h5>1. Identificación del consumidor</h5>
        <div class="grid col-2 mt-3">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input v-model="form.name" type="text" class="input" id="name">
            <div v-if="$v.form.name.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
          <div class="form-group">
            <label for="lastName">Apellidos</label>
            <input v-model="form.lastName" type="text" class="input" id="lastName">
            <div v-if="$v.form.name.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
        </div>
        <div class="grid col-2 mt-3">
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" type="text" class="input" id="email">
            <div v-if="$v.form.email.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
          <div class="form-group">
            <label for="phone">Telefono</label>
            <input v-model="form.phone" type="text" class="input" id="phone">
            <div v-if="$v.form.email.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
        </div>
        <div class="grid col-2 mt-3">
          <div class="form-group">
            <label for="typeDocument">Tipo de documento</label>
            <select v-model="form.typeDocument" class="select" id="typeDocument">
              <option value="dni">DNI</option>
              <option value="ce">CE</option>
              <option value="otro">Otro</option>
            </select>
            <div v-if="$v.form.typeDocument.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
          <div class="form-group">
            <label for="document">Número de documento</label>
            <input v-model="form.document" type="text" class="input" id="document">
            <div v-if="$v.form.document.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
        </div>
        <div class="grid col-2 mt-3">
          <div class="form-group">
            <label for="department">Departmento</label>
            <input v-model="form.department" type="text" class="input" id="department">
            <div v-if="$v.form.department.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
          <div class="form-group">
            <label for="province">Provincia</label>
            <input v-model="form.province" type="text" class="input" id="province">
            <div v-if="$v.form.province.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
        </div>
        <div class="grid col-2 mt-3">
          <div class="form-group">
            <label for="district">Distrito</label>
            <input v-model="form.district" type="text" class="input" id="district">
            <div v-if="$v.form.district.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
          <div class="form-group">
            <label for="address">Dirección</label>
            <input v-model="form.address" type="text" class="input" id="address">
            <div v-if="$v.form.address.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
        </div>
        <h5 class="mt-3">2. Identificacion del bien contratado</h5>
        <div class="grid col-2 mt-3">
          <div class="form-group">
            <label for="date">Fecha</label>
            <input v-model="form.date" type="date" class="input" id="date">
            <div v-if="$v.form.date.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
          <div class="form-group">
            <label for="total">Monto reclamado</label>
            <input v-model.number="form.total" type="number" class="input" id="total">
            <div v-if="$v.form.total.$error">
              <span class="form-group__error">Hay un error en este campo.</span>
            </div>
          </div>
        </div>
        <div class="grid mt-3">
          <label for="description">Descripción</label>
          <textarea
            v-model="form.description"
            class="textarea"
            name="description"
            id="description"
            cols="30"
            rows="10"></textarea>
          <div v-if="$v.form.description.$error">
            <span class="form-group__error">Hay un error en este campo.</span>
          </div>
        </div>
        <h5 class="mt-3">3. Detalle de la Reclamación y Pedido del Consumidor</h5>
        <div class="col mt-3">
          <select v-model="form.type" class="select" id="type">
            <option value="reclamo">Reclamo</option>
            <option value="queja">Queja</option>
          </select>
          <div v-if="$v.form.type.$error">
            <span class="form-group__error">Hay un error en este campo.</span>
          </div>
        </div>
        <div class="grid mt-3">
          <label for="description">Detalle</label>
          <textarea
            v-model="form.detail"
            class="textarea"
            name="description"
            id="detail"
            cols="30"
            rows="10"></textarea>
          <div v-if="$v.form.detail.$error">
            <span class="form-group__error">Hay un error en este campo.</span>
          </div>
        </div>
        <div class="grid mt-3">
          <label for="description">Pedido</label>
          <textarea
            v-model="form.order"
            class="textarea"
            name="description"
            id="order"
            cols="30"
            rows="10"></textarea>
          <div v-if="$v.form.order.$error">
            <span class="form-group__error">Hay un error en este campo.</span>
          </div>
        </div>
        <div class="mt-3">
          <p>
            El provedor deberá dar respuesta al reclamo en un plazo no mayor de treinta (30) días calendario, pudiendo
            ampliar el plazo hasta por treinta (30) días más, previa comunicación al consumidor.
          </p>
        </div>
        <recaptcha class="mt-3" @error="onError" @success="onSuccess" @expired="onExpired"/>
        <span class="form-group__error">Campo obligatorio*</span>
        <button :disabled="!recaptchaValidate" class="btn btn--primary mt-3" @click="submit">
          <span v-if="!loading">Enviar</span>
          <div v-else class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'Claims',
  layout: 'blue',
  data () {
    return {
      form: {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        typeDocument: '',
        document: '',
        department: '',
        province: '',
        district: '',
        address: '',
        date: '',
        total: '',
        description: '',
        type: '',
        detail: '',
        order: ''
      },
      robot: false,
      recaptchaValidate: false,
      loading: false,
      thanks: false
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      typeDocument: {
        required
      },
      document: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(12)
      },
      department: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50)
      },
      province: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50)
      },
      district: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50)
      },
      address: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(150)
      },
      date: {
        required
      },
      total: {
        required
      },
      description: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(250)
      },
      type: {
        required
      },
      detail: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(250)
      },
      order: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(250)
      }
    }
  },
  methods: {
    async submit () {
      try {
        this.$v.form.$touch()
        if (!this.$v.$invalid && !this.robot && this.recaptchaValidate) {
          this.loading = true
          await this.$fireStore.collection('claims').add({
            ...this.form
          })
          this.loading = false
          this.thanks = true
        }
      } catch (e) {
        this.$sentry.captureException(e)
      }
    },
    onError () {
      this.robot = true
    },
    onSuccess () {
      this.recaptchaValidate = true
    },
    onExpired () {
      this.recaptchaValidate = false
    },
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/pages/claims";
</style>
