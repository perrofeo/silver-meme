<template>
  <div>
    <div id="portafolio" class="portada">
  
  <b-navbar toggleable="md" type="light" variant="">

  <b-navbar-brand to="/">
        <img src="~/assets/LOGOPORTADA.svg" aria-label="Glammy" class="logo" width="auto" height="40">
  </b-navbar-brand>

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
       <b-nav-item to="/">Inicio</b-nav-item>
       <b-nav-item to="/servicios">Servicios</b-nav-item>
       <b-nav-item to="/portafolio">Portafolio</b-nav-item>
       <b-nav-item to="/contacto">Contacto</b-nav-item>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <h1>Portafolio</h1>
    <b-container class="bv-example-row text-center bv-example-row-flex-cols">
        <b-row >
            <b-col md="5" lg="6" class="texto-inicio">
                <p class="p-3">Te invitamos a hacer un recorrido por
nuestros eventos y a conocer el
portafolio de modelos Glammy.</p>
            </b-col>
        </b-row>
    </b-container>
    </div>
    <section class="portafolio-eventos mt-5 text-center">
        <h2>Eventos con el estilo Glammy</h2>
        <b-container>
        
    <b-card-group columns>
        <b-card title="Card title that wraps to a new line"
                img-src="https://placekitten.com/g/400/450"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
            </p>
        </b-card>
        <b-card header="Quote">
            <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
        </b-card>
        <b-card title="Title"
                img-src="https://placekitten.com/500/350"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
            </p>
            <small class="text-muted">Last updated 3 mins ago</small>
        </b-card>
        <b-card bg-variant="primary"
                text-variant="white">
            <blockquote class="card-blockquote">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
                <footer>
                    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                </footer>
            </blockquote>
        </b-card>
        <b-card title="Title">
            <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </b-card>
        <b-card img-src="https://picsum.photos/400/400/?image=41"
                img-fluid
                img-alt="image"
                overlay>
        </b-card>
        <b-card img-src="https://picsum.photos/400/200/?image=41"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content
                than the first.
            </p>
            <div slot="footer">
                <small class="text-muted">Footer Text</small>
            </div>
        </b-card>
    </b-card-group>
        </b-container>
    </section>

    <section class="portafolio-modelos mt-5 text-center">
        <h2>Portafolio de Modelos</h2>
            <b-container>
        
    <b-card-group columns>
        <b-card title="Card title that wraps to a new line"
                img-src="https://placekitten.com/g/400/450"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
            </p>
        </b-card>
        <b-card header="Quote">
            <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
        </b-card>
        <b-card title="Title"
                img-src="https://placekitten.com/500/350"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
            </p>
            <small class="text-muted">Last updated 3 mins ago</small>
        </b-card>
        <b-card bg-variant="primary"
                text-variant="white">
            <blockquote class="card-blockquote">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
                <footer>
                    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                </footer>
            </blockquote>
        </b-card>
        <b-card title="Title">
            <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </b-card>
        <b-card img-src="https://picsum.photos/400/400/?image=41"
                img-fluid
                img-alt="image"
                overlay>
        </b-card>
        <b-card img-src="https://picsum.photos/400/200/?image=41"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content
                than the first.
            </p>
            <div slot="footer">
                <small class="text-muted">Footer Text</small>
            </div>
        </b-card>
    </b-card-group>
        </b-container>
    </section>

    
    <section class="contacto">
    <b-card title="¿Quieres saber más sobre nuestros servicios?"
            sub-title="Habla con nosotros."
            class="text-center">
        
        <b-btn variant="primary" href="#">+ Info</b-btn>
    </b-card>
  </section>
  <site-footer/>
  </div>  
</template>
<script>

import SiteFooter from '~/components/SiteFooter.vue'

export default {
components:{
    SiteFooter
   }
}
</script>
<style scoped>
.container{
  min-height: 50vh;
}
    .portada{
         background-image: url("~assets/GLAMMY_background_PORTAFOLIO.svg");
         min-height: 30vh;
         background-position: top;
    }
    #portafolio h1{
      margin: 60px 0 50px;
      text-align: center;
      color: white;
    }
    .texto-inicio p{
        font-size: 2em;
    }
</style>