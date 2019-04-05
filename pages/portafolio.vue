<template>
  <div>
    <div id="portafolio" class="portada">
  
  <b-navbar toggleable="md" type="light" variant="">

  <b-navbar-brand to="/">
        <img src="~/assets/LOGOPORTADA.svg" aria-label="Glammy" class="logo" width="auto" height="34" alt="logo Glammy">
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
                img-alt="modelo Glammy"
                img-fluid
                img-top>
            <p class="card-text">
                Mercedes Martinez
            </p>
        </b-card>
        <b-card :img-src="require('../static/Modelo6_Izamar-Campuzano.jpg')"
                img-fluid
                img-alt="modelo Glammy"
                img-top>
            <p class="card-text">
                Izamar Campuzano
            </p>
        </b-card>
        
        <b-card :img-src="require('../static/Modelo2_Nahomi-Espinoza.jpg')"
                img-fluid
                img-alt="modelo Glammy"
                img-top>
            <p class="card-text">
                Nahomi Espinoza
            </p>
        </b-card>
        <b-card class="opinion"
                text-variant="white">
            <blockquote class="card-blockquote">
                <p>
                    “Trabajar con las modelos de Glammy ha sido toda una experiencia de profesionalismo y tranquilidad. Además nuestros clientes no podrían haber quedado más encantados.”
                </p>
                <footer>
                    <small>Jonathan González, CEO <cite title="Source Title">Woods Lounge Bar</cite></small>
                </footer>
            </blockquote>
        </b-card>
        <b-card :img-src="require('../static/Modelo3_Belen-Blandon.jpg')"
                img-fluid
                img-alt="modelo Glammy"
                img-top>
            <p class="card-text">
                Belén Blandon
            </p>
        </b-card>
        <b-card :img-src="require('../static/Modelo4_Thalia-Aguirre.jpg')"
                img-fluid
                img-alt="modelo Glammy"
                img-top>
            <p class="card-text">
                Thalia Aguirre
            </p>
        </b-card>
        <b-card :img-src="require('../static/Modelo5_Rachell-Chollette.jpg')"
                img-fluid
                img-alt="modelo Glammy"
                img-top>
            <p class="card-text">
                Rachell Chollette
            </p>
        </b-card>
    </b-card-group>
        </b-container>
    </section>
    <section class="portafolio-eventos mt-5 text-center">
        <h2>Eventos con el toque Glammy</h2>
        <b-container>
        
    <b-card-group columns>
        
        <b-card :img-src="require('../static/2.jpg')"
                img-fluid
                img-alt="evento Glammy"
                img-top>
            <p class="card-text">
                Fiesta Summer Love en Bliss Lounge Estelí
            </p>
        </b-card>
        <b-card :img-src="require('../static/4.jpg')"
                img-fluid
                img-alt="evento Glammy"
                img-top>
            <p class="card-text">
                Amenizando la noche en Hard Bar Estelí
            </p>
        </b-card>
        
        <b-card :img-src="require('../static/1.jpg')"
                img-fluid
                img-alt="evento Glammy"
                img-top>
            <p class="card-text">
                Fiesta Hallow Bash en Woods Lounge Bar - Matagalpa 
            </p>
        </b-card>
        
        <b-card class="video">
             <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/WBQo501LP7A?rel=0"
    allowfullscreen
  ></b-embed>   
            
        </b-card>
        <b-card :img-src="require('../static/8.jpg')"
                img-fluid
                img-alt="evento Glammy"
                img-top>
            <p class="card-text">
                Evento promocional Yota de Nicaragua
            </p>
        </b-card>
        <b-card class="opinion"
                text-variant="white">
            <blockquote class="card-blockquote">
                <p>
                    “El uso de Glammy para nuestros eventos corporativos, activaciones y merchandising nos abrió una gama de nuevos servicios en nuevas zonas del país. Ahora nuestros eventos cuentan con el respaldo profesional que ayuda a potencializar nuestra marca de cara a nuestros clientes y generar el top of mind que todas las empresas buscan.”
                </p>
                <footer>
                    <small>Ulises Cruz, Gerente de Ventas y Mercadeo <cite title="Source Title">Yota de Nicaragua</cite></small>
                </footer>
            </blockquote>
        </b-card>
        <b-card :img-src="require('../static/3.jpg')"
                img-fluid
                img-alt="evento Glammy"
                img-top>
            <p class="card-text">
                Viral Party en Hard Bar Estelí
            </p>
        </b-card>
        <b-card :img-src="require('../static/GLAM_HOME1_Tranquilidad.jpg')"
                img-fluid
                img-alt="evento Glammy"
                img-top>
            <p class="card-text">
                Acción de marketing Cámara de Comercio Matagalpa
            </p>
        </b-card>
        <b-card :img-src="require('../static/6.jpg')"
                img-fluid
                img-alt="evento Glammy"
                img-top>
            <p class="card-text">
                2º Aniversario Chefellas Matagalpa
            </p>
        </b-card>
        
        <b-card :img-src="require('../static/7.jpg')"
                img-fluid
                img-alt="evento Glammy"
                img-top>
            <p class="card-text">
                En Woods Matagalpa
            </p>
        </b-card>
        <b-card class="video">
             <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/MIis3_mlefc?rel=0"
    allowfullscreen
  ></b-embed>   
            
        </b-card>
        <b-card :img-src="require('../static/5.jpg')"
                img-fluid
                img-alt="evento Glammy"
                img-top>
            <p class="card-text">
                Inauguración Little Fellas Matagalpa
            </p>
        </b-card>
    </b-card-group>
        </b-container>
    </section>

    
    <section class="contacto">
    <b-card class="text-center">
            <h2>¿Quieres dar un toque especial a tu evento?</h2>
        <nuxt-link to="/contacto"><b-btn variant="primary">Contáctanos</b-btn></nuxt-link>
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
.navbar-light .navbar-toggler {
    border-color: transparent;
    background-color: rgba(255,255,255,1);
    
}

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
    .opinion {
        background: rgba(77,77,77,1);
background: -moz-radial-gradient(center, ellipse cover, rgba(77,77,77,1) 0%, rgba(51,51,51,1) 100%);
background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(77,77,77,1)), color-stop(100%, rgba(51,51,51,1)));
background: -webkit-radial-gradient(center, ellipse cover, rgba(77,77,77,1) 0%, rgba(51,51,51,1) 100%);
background: -o-radial-gradient(center, ellipse cover, rgba(77,77,77,1) 0%, rgba(51,51,51,1) 100%);
background: -ms-radial-gradient(center, ellipse cover, rgba(77,77,77,1) 0%, rgba(51,51,51,1) 100%);
background: radial-gradient(ellipse at center, rgba(77,77,77,1) 0%, rgba(51,51,51,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d4d4d', endColorstr='#333333', GradientType=1 );
    }
    .opinion p {
        color: white;
    }
    .portafolio-modelos h2, .portafolio-eventos h2  {
       padding-bottom: 1rem;
    }
    .portafolio-modelos .card-text {
        font-weight: 700;
    }
    .portafolio-eventos {
        padding-bottom: 4rem;
    }
    .contacto h2 {
    margin-bottom: 1.2rem;
}
.video .card-body {
    padding: 0;
}
</style>