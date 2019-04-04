<template>
  <div>
    <div id="servicios" class="portada">
  
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
    <div class="portada-servicios text-center">
    
        <b-jumbotron  header="Servicios a la medida"
         lead="Impulsa tu evento, promoción o acción de marketing con el versátil menú de servicios de Glammy." >
        </b-jumbotron>
    </div>
  </div>      
    <b-container class="bv-example-row text-center bv-example-row-flex-cols servicios">
    <b-row>
        <b-col md="6" lg="4"><div>
    <b-card :img-src="require('../static/Serv_Modelos-Edecanes.jpg')"
            class="m-2"
            title="Modelos y Edecanes">
        <p class="card-text">
            Ofrecemos anfitrionas capacitadas y supervisadas ​​para dar una calurosa bienvenida a sus invitados y ocuparse de su fiesta o evento promocional.
        </p>
    </b-card>
</div></b-col>
        <b-col md="6" lg="4">
          <div>
    <b-card :img-src="require('../static/Serv_Dinosaurio.jpg')"
            class="m-2"
            title="Show Dinosaurio Lesbiano">
        <p class="card-text">
            Una producción original de Glammy perfecta para llevar tu fiesta a otro nivel! El show se ofrece en formato flexible y puede incluir: modelos Glammy, disparos de Co2, confeti, souvenirs y led sticks.
        </p>
    </b-card>
</div>
        </b-col>
        <b-col md="6" lg="4">
          <div>
    <b-card :img-src="require('../static/Serv_Co2.jpg')"
            class="m-2" 
            title="Alquiler efectos especiales para fiestas">
        <p class="card-text">
          
Impresiona y anima a tus invitados con nuestros equipos de efectos escénicos:<br>
✦ <strong>Pistola CO2 LED:</strong> incluye manguera de 3 metros, cilindro CO2 y mochila para el cilindro.<br>
✦ <strong>Máquina eléctrica de confeti.</strong>
        </p>
    </b-card>
</div>
        </b-col>
        <b-col md="6" lg="4">
          <div>
    <b-card :img-src="require('../static/Serv_Vestimentas.jpg')"
            class="m-2"
            title="Vestimentas personalizadas para eventos">
        <p class="card-text">
            Agregue el toque final a tu evento con nuestros uniformes y trajes.
        </p>
    </b-card>
</div>
        </b-col>
        <b-col md="6" lg="4">
          <div>
    <b-card :img-src="require('../static/Serv_Skydancer.jpg')"
            class="m-2" 
            title="Publicidad dinámica">
        <p class="card-text">
            ✦ <strong>Skydancer:</strong> ideal para darle frescura a tu marca y generar presencia. Esta publicidad dinámica es muy atractiva y resalta a la vista de todos por su tamaño. Colores disponibles: azul, rojo y morado.
        </p>
    </b-card>
</div>
        </b-col>
        <b-col md="6" lg="4">
          <div>
    <b-card :img-src="require('../static/Serv_Influencers.jpg')"
            class="m-2" 
            title="Influencers">
        <p class="card-text">
            Promueve tu marca, tienda, servicios y productos con resultados efectivos y a bajo costo con nuestras influencers.
        </p>
    </b-card>
</div>
        </b-col>
    </b-row>
</b-container>
    
    <section class="contacto">
    <b-card class="text-center">
        <h2>¿Quieres saber más sobre nuestros servicios?</h2>
        <nuxt-link to="/contacto"><b-btn variant="primary">Habla con nosotros</b-btn></nuxt-link>
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
         background-image: url("~assets/GLAMMY_background_SERVICIOS.svg");
         min-height: 60vh;
         background-position: top;
    }
    #servicios .jumbotron{
      background-color: transparent;
    }
    .contacto h2 {
        margin-bottom: 1.2rem;
    }
  .portada-servicios {
      max-width: 600px;
      margin: auto;
      padding-top: 4rem;
  }  
  .servicios {
      padding-bottom: 4rem;
  }
</style>



