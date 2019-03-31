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
       <b-nav-item class="inicio" to="/">Inicio</b-nav-item>
       <b-nav-item to="/servicios">Servicios</b-nav-item>
       <b-nav-item to="/portafolio">Portafolio</b-nav-item>
       <b-nav-item to="/contacto">Contacto</b-nav-item>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <div class="portada-portafolio">
    
        <b-container>
            <b-col md="4" lg="5" class="">
                <b-jumbotron  header="Con el estilo
Glammy"
         lead="Conoce nuestro portafolio de
modelos y trabajos realizados." >
        </b-jumbotron>
            </b-col>
        </b-container>
        
    
    </div>
    </div>
    <section class="portafolio-modelos mt-5 text-center">
        <h2>Portafolio de Modelos</h2>
            <b-container>
        
    <b-card-group columns>
        <b-card img-src="Modelo1_Mercedes-Martinez.jpg"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Mercedes Martinez
            </p>
        </b-card>
        <b-card img-src="Modelo2_Nahomi-Espinoza.jpg"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Nahomi Espinoza
            </p>
        </b-card>
        <b-card img-src="Modelo3_Belen-Blandon.jpg"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Belén Blandon
            </p>
        </b-card>
        <b-card img-src="Modelo4_Thalia-Aguirre.jpg"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Thalia Aguirre
            </p>
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
    </b-card-group>
        </b-container>
    </section>
    <section class="portafolio-eventos mt-5 text-center">
        <h2>#SoyGlammy Modelos</h2>
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

    .portada{
         background-image: url("~assets/GLAMMY_background_PORTAFOLIO.svg");
         height: 100%;
         background-position: top;
         min-height: 85vh;
    }
    
    
    .portada-portafolio{
        padding-top: 12em;
    }
    .portada-portafolio .container{
            justify-content: flex-start;
            text-align: center;
    }
    .portada-portafolio .jumbotron{
        background-color: transparent;
    }
</style>