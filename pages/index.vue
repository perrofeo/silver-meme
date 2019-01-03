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

<!-- navbar-1.vue -->
      
  <section class="header">
    <div class="container">
      <b-jumbotron  header="Más éxito para
tu evento" lead="Somos una joven agencia de modelos y
edecanes ubicada en Matagalpa,
Nicaragua. Te ayudamos a presentar tu
marca o evento de manera exitosa,
encantar a tus clientes y comunicarles
correctamente el mensaje de tus
productos o servicios." >
            
            <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
    </div>
  </section>
  </div>
  <section class="descripcion">
    <b-container>
      <b-row align-h="center">
        <b-col sm="8">
          
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            <div class="links">
        <a
          href="#"
          class="button--grey">Servicios</a>
          <a
          href="#"
          class="button--grey">Portafolio</a>
      </div>
          
          </b-col>
        
    </b-row>
    </b-container>
  
  </section>
  <site-footer/>
  
  </div>
</template>

<script>

import SiteFooter from '~/components/SiteFooter.vue'


export default {
  components: {
    SiteFooter
  }
}
</script>
<style scoped>
   .portada{
  background-image: url("~assets/GLAMMY_background_HOME.svg");
}
</style>


<style>

.header .container{
  justify-content: center;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.jumbotron{
  max-width: 700px;
  background-color: transparent;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 4.5em;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 2.5em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
