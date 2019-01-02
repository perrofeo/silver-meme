<template>
<div>
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
            <p>For more information visit website</p>
            <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
    </div>
  </section>
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

<style>

.header .container{
  justify-content: left;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.jumbotron{
  max-width: 500px;
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
