<template>
  <div>
    <div class="portada">
  
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
    <h1>Servicios</h1>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    <h2>Servicios</h2>
    </div>
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
</style>



