<template>
  <div>
    <div id="servicios" class="portada">
  
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
    <div class="portada-servicios text-center">
    
        <b-jumbotron  header="Servicios a la medida"
         lead="Impulsa tu evento, promoción o acción de marketing con el versátil menú de servicios de Glammy." >
        </b-jumbotron>
    </div>
  </div>      
    <b-container class="bv-example-row text-center bv-example-row-flex-cols">
    <b-row align-v="center">
        <b-col md="6" lg="4"><div>
    <b-card :img-src="require('../static/Serv_Modelos-Edecanes.jpg')"
            class="m-2"
            title="Modelos y Edecanes">
        <p class="card-text">
            Ofrecemos anfitrionas capacitadas y supervisadas ​​para dar una calurosa bienvenida a sus invitados y ocuparse de su fiesta o evento promocional.
        </p>
        <a href="#"
           class="card-link">Card link</a>
        <b-link href="#"
                class="card-link">Another link</b-link>
    </b-card>
</div></b-col>
        <b-col md="6" lg="4">
          <div>
    <b-card :img-src="require('../static/Serv_Vestimentas.jpg')"
            class="m-2"
            title="Vestimentas personalizadas para eventos">
        <p class="card-text">
            Agregue el toque final a tu evento con nuestros uniformes y trajes.
        </p>
        <a href="#"
           class="card-link">Card link</a>
        <b-link href="#"
                class="card-link">Another link</b-link>
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
        <a href="#"
           class="card-link">Card link</a>
        <b-link href="#"
                class="card-link">Another link</b-link>
    </b-card>
</div>
        </b-col>
        <b-col md="6" lg="4">
          <div>
    <b-card :img-src="require('../static/Serv_Skydancer.jpg')"
            class="m-2" 
            title="Publicidad dinámica">
        <p class="card-text">
            - Skydancer: ideal para darle frescura a tu marca y generar presencia. Esta publicidad dinámica es muy atractiva y resalta a la vista de todos por su tamaño. Colores disponibles: azul, rojo y morado.<br>
            - Dinosaurio gigante para eventos.
        </p>
        <a href="#"
           class="card-link">Card link</a>
        <b-link href="#"
                class="card-link">Another link</b-link>
    </b-card>
</div>
        </b-col>
        <b-col md="6" lg="4">
          <div>
    <b-card class="m-2" 
            title="Disparo CO2">
        <p class="card-text">
            
        </p>
        <a href="#"
           class="card-link">Card link</a>
        <b-link href="#"
                class="card-link">Another link</b-link>
    </b-card>
</div>
        </b-col>
    </b-row>
</b-container>
    
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
         background-image: url("~assets/GLAMMY_background_SERVICIOS.svg");
         min-height: 60vh;
         background-position: top;
    }
    #servicios .jumbotron{
      background-color: transparent;
    }
    
</style>



