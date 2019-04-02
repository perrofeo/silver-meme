<template>
  <div>
    <div id="portafolio" class="portada">
  
  <b-navbar toggleable="md" type="light" variant="">

  <b-navbar-brand to="/">
        <img src="~/assets/LOGOPORTADA.svg" aria-label="Glammy" class="logo" width="auto" height="34">
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
        <b-card :img-src="require('../static/Modelo1_Mercedes-Martinez.jpg')"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Mercedes Martinez
            </p>
        </b-card>
        <b-card :img-src="require('../static/Modelo2_Nahomi-Espinoza.jpg')"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Nahomi Espinoza
            </p>
        </b-card>
        <b-card :img-src="require('../static/Modelo3_Belen-Blandon.jpg')"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Belén Blandon
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
        <b-card :img-src="require('../static/Modelo4_Thalia-Aguirre.jpg')"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Thalia Aguirre
            </p>
        </b-card>
    </b-card-group>
        </b-container>
    </section>
    <section class="portafolio-eventos mt-5 text-center">
        <h2>#SoyGlammy Modelos</h2>
        <b-container>
        
    <b-card-group columns>
        <b-card>
             <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/WBQo501LP7A?rel=0"
    allowfullscreen
  ></b-embed>   
            <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
            </p>
        </b-card>
        <b-card>
             <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/MIis3_mlefc?rel=0"
    allowfullscreen
  ></b-embed>   
            <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
            </p>
        </b-card>
        <b-card :img-src="require('../static/2.jpg')"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Modelos Glammy
            </p>
        </b-card>
        <b-card :img-src="require('../static/Port_4.jpg')"
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
                Modelos Glammy
            </p>
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