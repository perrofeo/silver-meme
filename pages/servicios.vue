<template>
  <div>
    <div class="portada servicios">
  
  <b-navbar toggleable="md" type="light" variant="">

  <b-navbar-brand href="/">
        <img src="~/assets/LOGOPORTADA.svg" aria-label="Glammy" class="logo" width="auto" height="40">
  </b-navbar-brand>

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
       <b-nav-item href="/">Inicio</b-nav-item>
       <b-nav-item href="/servicios">Servicios</b-nav-item>
       <b-nav-item href="#">Portafolio</b-nav-item>
       <b-nav-item href="#">Contacto</b-nav-item>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <b-container class="bv-example-row text-center bv-example-row-flex-cols">
    <h1>Servicios</h1>
    <b-row align-v="center">
        <b-col md="6" lg="4"><div>
    <b-card class="m-2"
            title="Card title"
            sub-title="Card subtitle">
        <p class="card-text">
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
        </p>
        <a href="#"
           class="card-link">Card link</a>
        <b-link href="#"
                class="card-link">Another link</b-link>
    </b-card>
</div></b-col>
        <b-col md="6" lg="4">
          <div>
    <b-card class="m-2"
            title="Card title"
            sub-title="Card subtitle">
        <p class="card-text">
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
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
            title="Card title"
            sub-title="Card subtitle">
        <p class="card-text">
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
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
    </div>
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
         background-image: url("~assets/GLAMMY_background_SERVICIOS.svg");
    }
    .servicios h1{
      margin: 60px 0 100px;
    }
    
</style>



