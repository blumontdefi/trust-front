<template>
  <!--Panel-->
  <div class="panel">
    <div class="panel__content">
      <div class="panel__close">
        <ion-icon name="close-outline" @click="$store.dispatch('content/togglePanel')"></ion-icon>
      </div>
      <div v-if="loadPanel" class="text-center">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-if="!loadPanel && requestCredit.credit">
        <div class="panel__item">
          <h4>Crédito total</h4>
          <p class="text-right">$ {{ new Intl.NumberFormat().format(requestCredit.credit) }}</p>
        </div>
        <hr>
        <h3 class="text-center mb-4">Distribución de crédito</h3>
        <div class="panel__list">
          <div v-for="(c, index) in credits" class="panel__credits" :key="index">
            <h4>{{c.haras.name}}</h4>
            <p class="text-right">$ {{ new Intl.NumberFormat().format(c.credit) }}</p>
          </div>
        </div>
      </div>
      <div class="panel__message" v-if="!loadPanel && !requestCredit.credit">
        <div>
          <h4>Aún no tienes un crédito asignado</h4>
          <button class="btn btn--primary" @click="goToRequest">Solicitar crédito</button>
        </div>
      </div>
    </div>
  </div>
  <!--End-->
</template>

<script>
export default {
  name: 'Panel',
  data () {
    return {
      requestCredit: {},
      credits: [],
      client: {},
      loadPanel: false
    }
  },
  computed: {
    togglePanel () {
      return this.$store.state.content.panel
    }
  },
  watch: {
    async togglePanel () {
      try {
        if (this.togglePanel) {
          this.loadPanel = true
          // Get client
          const user = this.$store.state.user.data
          const querySnap = await this.$fireStore.collection('clients').where('uid', '==', user.uid).get()
          querySnap.forEach((c) => {
            this.client = {
              id: c.id,
              ...c.data()
            }
          })
          // Request credits
          const querySnapRequest = await this.$fireStore.collection('requests').where('client.id', '==', this.client.id).where('approve', '==', true).get()
          querySnapRequest.forEach((r) => {
            this.requestCredit = {
              id: r.id,
              ...r.data()
            }
          })
          // Credits
          this.credits = []
          if (this.requestCredit) {
            const querySnapCredits = await this.$fireStore.collection('credits').where('client.id', '==', this.client.id).where('state', '==', true).get()
            querySnapCredits.forEach((c) => {
              const obj = {
                id: c.id,
                ...c.data()
              }
              this.credits.push(obj)
            })
          }
          //
          this.loadPanel = false
        }
      } catch (e) {
        this.requestCredit = {}
        this.credits = []
        this.client = {}
      }
    }
  },
  methods: {
    async goToRequest () {
      await this.$store.dispatch('content/togglePanel')
      this.$router.push('request')
    }
  }
}
</script>

<style scoped>

</style>
