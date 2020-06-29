<template>
  <div class="event-detail">
    <div class="event-detail__content container container--event">
      <div class="event-detail__head">
        <div>
          <h2>{{event.name}}</h2>
          <h4 class="primary-color"> {{ $moment(event.startDate ).format('MMMM Do YYYY, h:mm a') }}</h4>
        </div>
        <div>
          <div class="event-detail__countdown">
            <div class="text-center mr-1"><h2>{{days}}</h2>
              <p>Días</p>
            </div>
            <div class="text-center mr-1"><h2>:</h2>
            </div>
            <div class="text-center mr-1"><h2>{{hours}}</h2>
              <p>Horas</p>
            </div>
            <div class="text-center mr-1"><h2>:</h2>
            </div>
            <div class="text-center mr-1"><h2>{{minutes}}</h2>
              <p>Min</p>
            </div>
            <div class="text-center mr-1"><h2>:</h2>
            </div>
            <div class="text-center mr-1"><h2>{{seconds}}</h2>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </div>
      <figure>
        <img :src="event.image">
      </figure>
      <div class="event-information col col-3">
        <div class="block information">
          <!--::::::::::-->
          <h2>Información:</h2>
          <div class="wrap col">
            <!--::::::::::-->
            <div class="col">
              <img src="images/ico-date.jpg" alt="">
              <div>
                <h3>Fecha del evento</h3>
                <p>12/ 04 / 2020</p>
              </div>
            </div>
            <!--::::::::::-->
            <div class="col">
              <img src="images/ico-time.jpg" alt="">
              <div>
                <h3>Hora Lima</h3>
                <p>21:00</p>
              </div>
            </div>
            <!--::::::::::-->
            <div class="col">
              <img src="images/ico-duration.jpg" alt="">
              <div>
                <h3>Duración</h3>
                <p>3 horas</p>
              </div>
            </div>
            <!--::::::::::-->
            <div class="col">
              <img src="images/ico-auction.jpg" alt="">
              <div>
                <h3>Caballo en Subasta</h3>
                <p>20 Caballos</p>
              </div>
            </div>
            <!--::::::::::-->
          </div>
        </div>

        <div class="block haras">
          <!--::::::::::-->
          <h2>Haras:</h2>
          <div class="wrap">
            <!--::::::::::-->
            <div class="col">
              <img src="images/jimena.jpg" alt="">
              <div>
                <h3>Jimena del Carpio</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don’t </p>
              </div>
            </div>
            <!--::::::::::-->
            <div class="col">
              <img src="images/alejandro.jpg" alt="">
              <div>
                <h3>Alejandro Roca Rey</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don’t </p>
              </div>
            </div>
            <!--::::::::::-->
            <div class="col">
              <img src="images/carla.jpg" alt="">
              <div>
                <h3>Carla Perez Lopez</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don’t </p>
              </div>
            </div>
            <!--::::::::::-->
          </div>
        </div>

        <div class="block agente">
          <!--::::::::::-->
          <h2>Agente:</h2>
          <div class="wrap">
            <!--::::::::::-->
            <div class="col">
              <img src="images/carlos.jpg" alt="">
              <div>
                <h3>Carlos del Carpio</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected</p>
              </div>
            </div>
            <!--::::::::::-->
            <div class="col">
              <img src="images/carlos.jpg" alt="">
              <div>
                <h3>Bruno Pinasco</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected</p>
              </div>
            </div>
            <!--::::::::::-->
          </div>
        </div>

      </div>
      <div class="container">
        <div class="documents">
          <div class="container col col-5 lighter-grey-bg-color">
            <div>
              <p><i class="fas fa-file-alt"></i> Pedigree.com</p>
              <a href="">
                <ion-icon name="download-outline"></ion-icon>
              </a>
            </div>
            <div>
              <p><i class="fas fa-file-alt"></i> Evento 1991</p>
              <a href="">
                <ion-icon name="download-outline"></ion-icon>
              </a>
            </div>
            <div>
              <p><i class="fas fa-file-alt"></i> Documento 1</p>
              <a href="">
                <ion-icon name="download-outline"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="horse-catalog">
        <h1 class="text-center">Catálogo de caballos</h1>
        <div class="wrap col col-3">
          <!--::::::::-->
          <div class="card card--horse">
            <figure>
              <img src="images/horse-catalog.jpg" alt="" class="img-max">
              <div class="label-primary">Label</div>
            </figure>

            <div class="wrap-catalog">

              <div class="block col col-2">
                <h2>Luigi D’Eclipse Lui</h2>
                <div class="col justify-items-end">
                  <div class="label-secondary">Pre Oferta abierta</div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <p>Sire</p>
                    <p>Sire</p>
                  </div>
                  <div class="col col-2">
                    <p>Dame</p>
                    <p>Dame</p>
                  </div>
                  <div class="col col-2">
                    <p>Sexo</p>
                    <p>Sexo</p>
                  </div>
                  <div class="col col-2">
                    <p>Fec.Nacimiento</p>
                    <p>08 / 11 / 09</p>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <h3>Oferta Actual</h3>
                    <p class="text-right">$ 50, 000</p>
                  </div>
                </div>
              </div>

              <div class="block table">
                <div class="col col-2 title text-center">
                  <p>Bids</p>
                  <p>Subasta en vivo</p>
                </div>
                <div class="col col-2 text-center lighter-grey-bg-color">
                  <p>2</p>
                  <p>2 días</p>
                </div>
              </div>

              <a href="" class="btn btn--secondary">Más información</a>
            </div>

          </div>
          <!--::::::::-->
          <div class="card card--horse">
            <figure>
              <img src="images/horse-catalog.jpg" alt="" class="img-max">
              <div class="label-primary">Label</div>
            </figure>

            <div class="wrap-catalog">

              <div class="block col col-2">
                <h2>Luigi D’Eclipse Lui</h2>
                <div class="col justify-items-end">
                  <div class="label-secondary">Pre Oferta abierta</div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <p>Sire</p>
                    <p>Sire</p>
                  </div>
                  <div class="col col-2">
                    <p>Dame</p>
                    <p>Dame</p>
                  </div>
                  <div class="col col-2">
                    <p>Sexo</p>
                    <p>Sexo</p>
                  </div>
                  <div class="col col-2">
                    <p>Fec.Nacimiento</p>
                    <p>08 / 11 / 09</p>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <h3>Oferta Actual</h3>
                    <p class="text-right">$ 50, 000</p>
                  </div>
                </div>
              </div>

              <div class="block table">
                <div class="col col-2 title text-center">
                  <p>Bids</p>
                  <p>Subasta en vivo</p>
                </div>
                <div class="col col-2 text-center lighter-grey-bg-color">
                  <p>2</p>
                  <p>2 días</p>
                </div>
              </div>

              <a href="" class="btn btn--secondary">Más información</a>
            </div>

          </div>
          <!--::::::::-->
          <div class="card card--horse">
            <figure>
              <img src="images/horse-catalog.jpg" alt="" class="img-max">
              <div class="label-primary">Label</div>
            </figure>

            <div class="wrap-catalog">

              <div class="block col col-2">
                <h2>Luigi D’Eclipse Lui</h2>
                <div class="col justify-items-end">
                  <div class="label-secondary">Pre Oferta abierta</div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <p>Sire</p>
                    <p>Sire</p>
                  </div>
                  <div class="col col-2">
                    <p>Dame</p>
                    <p>Dame</p>
                  </div>
                  <div class="col col-2">
                    <p>Sexo</p>
                    <p>Sexo</p>
                  </div>
                  <div class="col col-2">
                    <p>Fec.Nacimiento</p>
                    <p>08 / 11 / 09</p>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <h3>Oferta Actual</h3>
                    <p class="text-right">$ 50, 000</p>
                  </div>
                </div>
              </div>

              <div class="block table">
                <div class="col col-2 title text-center">
                  <p>Bids</p>
                  <p>Subasta en vivo</p>
                </div>
                <div class="col col-2 text-center lighter-grey-bg-color">
                  <p>2</p>
                  <p>2 días</p>
                </div>
              </div>

              <a href="" class="btn btn--secondary">Más información</a>
            </div>

          </div>
          <!--::::::::-->
          <div class="card card--horse">
            <figure>
              <img src="images/horse-catalog.jpg" alt="" class="img-max">
              <div class="label-primary">Label</div>
            </figure>

            <div class="wrap-catalog">

              <div class="block col col-2">
                <h2>Luigi D’Eclipse Lui</h2>
                <div class="col justify-items-end">
                  <div class="label-secondary">Pre Oferta abierta</div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <p>Sire</p>
                    <p>Sire</p>
                  </div>
                  <div class="col col-2">
                    <p>Dame</p>
                    <p>Dame</p>
                  </div>
                  <div class="col col-2">
                    <p>Sexo</p>
                    <p>Sexo</p>
                  </div>
                  <div class="col col-2">
                    <p>Fec.Nacimiento</p>
                    <p>08 / 11 / 09</p>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <h3>Oferta Actual</h3>
                    <p class="text-right">$ 50, 000</p>
                  </div>
                </div>
              </div>

              <div class="block table">
                <div class="col col-2 title text-center">
                  <p>Bids</p>
                  <p>Subasta en vivo</p>
                </div>
                <div class="col col-2 text-center lighter-grey-bg-color">
                  <p>2</p>
                  <p>2 días</p>
                </div>
              </div>

              <a href="" class="btn btn--secondary">Más información</a>
            </div>

          </div>
          <!--::::::::-->
          <div class="card card--horse">
            <figure>
              <img src="images/horse-catalog.jpg" alt="" class="img-max">
              <div class="label-primary">Label</div>
            </figure>

            <div class="wrap-catalog">

              <div class="block col col-2">
                <h2>Luigi D’Eclipse Lui</h2>
                <div class="col justify-items-end">
                  <div class="label-secondary">Pre Oferta abierta</div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <p>Sire</p>
                    <p>Sire</p>
                  </div>
                  <div class="col col-2">
                    <p>Dame</p>
                    <p>Dame</p>
                  </div>
                  <div class="col col-2">
                    <p>Sexo</p>
                    <p>Sexo</p>
                  </div>
                  <div class="col col-2">
                    <p>Fec.Nacimiento</p>
                    <p>08 / 11 / 09</p>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <h3>Oferta Actual</h3>
                    <p class="text-right">$ 50, 000</p>
                  </div>
                </div>
              </div>

              <div class="block table">
                <div class="col col-2 title text-center">
                  <p>Bids</p>
                  <p>Subasta en vivo</p>
                </div>
                <div class="col col-2 text-center lighter-grey-bg-color">
                  <p>2</p>
                  <p>2 días</p>
                </div>
              </div>

              <a href="" class="btn btn--secondary">Más información</a>
            </div>

          </div>
          <!--::::::::-->
          <!--::::::::-->
          <div class="card card--horse">
            <figure>
              <img src="images/horse-catalog.jpg" alt="" class="img-max">
              <div class="label-primary">Label</div>
            </figure>

            <div class="wrap-catalog">

              <div class="block col col-2">
                <h2>Luigi D’Eclipse Lui</h2>
                <div class="col justify-items-end">
                  <div class="label-secondary">Pre Oferta abierta</div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <p>Sire</p>
                    <p>Sire</p>
                  </div>
                  <div class="col col-2">
                    <p>Dame</p>
                    <p>Dame</p>
                  </div>
                  <div class="col col-2">
                    <p>Sexo</p>
                    <p>Sexo</p>
                  </div>
                  <div class="col col-2">
                    <p>Fec.Nacimiento</p>
                    <p>08 / 11 / 09</p>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="table">
                  <div class="col col-2">
                    <h3>Oferta Actual</h3>
                    <p class="text-right">$ 50, 000</p>
                  </div>
                </div>
              </div>

              <div class="block table">
                <div class="col col-2 title text-center">
                  <p>Bids</p>
                  <p>Subasta en vivo</p>
                </div>
                <div class="col col-2 text-center lighter-grey-bg-color">
                  <p>2</p>
                  <p>2 días</p>
                </div>
              </div>

              <a href="" class="btn btn--secondary">Más información</a>
            </div>

          </div>
          <!--::::::::-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'blue',
  name: 'Event',
  data () {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  async asyncData ({ $fireStore, params }) {
    const querySnapshot = await $fireStore.collection('events').where('slug', '==', params.slug).get()
    let event = null
    querySnapshot.forEach((e) => {
      const obj = {
        id: e.id,
        ...e.data()
      }
      delete obj.startDate
      obj.startDate = e.data().startDate.toDate()
      event = {
        ...obj
      }
    })
    if (event) {
      return { event }
    }
  },
  created () {
    setInterval(() => {
      this.countdown()
    }, 1000)
  },
  methods: {
    countdown () {
      const now = new this.$moment(new Date())
      const then = new this.$moment(this.event.startDate)
      const diff = this.$moment.duration(then.diff(now))
      // Count
      this.days = parseInt(diff.asDays())
      this.hours = parseInt(diff.asHours())
      this.hours = this.hours - this.days * 24
      this.minutes = parseInt(diff.asMinutes())
      this.minutes = this.minutes - (this.days * 24 * 60 + this.hours * 60)
      this.seconds = parseInt(diff.asSeconds())
      this.seconds = this.seconds - (this.days * 24 * 60 * 60 + this.hours * 60 * 60 + this.minutes * 60)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/event-detail";
</style>
