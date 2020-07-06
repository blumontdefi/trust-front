<template>
  <div class="news-detail">
    <div class="news-detail__content container container--news">
      <div class="news-detail__head">
        <h2>Titulo de la noticia</h2>
        <div class="news-detail__img" style="background-image: url('/images/event.jpg');">
        </div>
      </div>
      <div class="news-detail__body">
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <hr>
      <div class="news-detail__others">
        <h3>Otras noticias</h3>
        <div class="grid col-3">
          <div class="card" style="cursor: pointer">
            <figure>
              <img src="/images/event.jpg" alt="" class="img-max">
            </figure>
            <div class="block">
              <h3>What is Lorem Ipsum</h3>
              <p class="primary-text-color">
                12/04/20
              </p>
              <div class="description">
                <h4>Descripción:</h4>
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <a class="link">Ver más</a>
            </div>
          </div>
          <div class="card" style="cursor: pointer">
            <figure>
              <img src="/images/event.jpg" alt="" class="img-max">
            </figure>
            <div class="block">
              <h3>What is Lorem Ipsum</h3>
              <p class="primary-text-color">
                12/04/20
              </p>
              <div class="description">
                <h4>Descripción:</h4>
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <a class="link">Ver más</a>
            </div>
          </div>
          <div class="card" style="cursor: pointer">
            <figure>
              <img src="/images/event.jpg" alt="" class="img-max">
            </figure>
            <div class="block">
              <h3>What is Lorem Ipsum</h3>
              <p class="primary-text-color">
                12/04/20
              </p>
              <div class="description">
                <h4>Descripción:</h4>
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <a class="link">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blue',
  name: 'NewsDetail'
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/news";
</style>
