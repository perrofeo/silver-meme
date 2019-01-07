<template>
  <div>
    <div id="contacto" class="portada">
  
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

    <b-container class="bv-example-row text-center">
         <b-row cols="12"> 
          <div class="glammy_img">
            <img src="~/assets/LOGO_JONATHAN.png">
          </div>
         </b-row>
    <b-row>
      
        <b-col cols="12">
          <b-jumbotron  header="Trabajemos juntos"
         lead="Si buscas un equipo profesional y creativo para
que tu evento o acción de marketing se vuelva
todo un éxito, contáctanos." >
        </b-jumbotron>
        </b-col>
    </b-row>
</b-container>
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

<style>
  .portada{
         background-image: url("~assets/GLAMMY_background_CONTACTO.svg");
         min-height: 40vh;
    }
    #contacto h1{
      margin: 60px 0 50px;
      text-align: center;
      color: white;
    }
    .glammy_img{
      margin: auto;
    }
    .glammy_img img{
      max-width: 350px;
      width: 100%;
      height: 100%;
    }
</style>

    
    