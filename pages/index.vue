<template>
<div>
  <div class="portada">
  
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
  <section class="servicios">
    <b-container>
      <b-row align-h="center">
        <b-col sm="10" md="12" >
          
          

     <b-card>
  <b-media vertical-align="center">
    <img class="d-none d-md-block"  slot="aside" src="~/assets/modelos.jpg"  alt="placeholder" />
    <b-media-body class="left">
    <h5 class="mt-0">Encanta a tus clientes</h5>
    <p>
      En este texto hacer un resumen más específico
de los servicios de Glammy Agencia de
Modelos y Edecanes. Las modelos, los
uniformes, el sonido, eventos creativos.
    </p>
    <b-btn variant="primary" href="#">Servicios</b-btn>
    </b-media-body>
  </b-media>
</b-card>
     <b-card>
  <b-media right-align vertical-align="center">
    <img class="d-none d-md-block" slot="aside" src="~/assets/modelos.jpg"  alt="placeholder" />
    <b-media-body class="right">
    <h5 class="mt-0">Agrega valor a tu marca</h5>
    <p>
      En este texto hacer un resumen más específico
de los servicios de Glammy Agencia de
Modelos y Edecanes. Las modelos, los
uniformes, el sonido, eventos creativos.
    </p>
    <b-btn variant="primary" href="#">Portafolio</b-btn>
    </b-media-body>
  </b-media>
</b-card>
          
          </b-col>
        
    </b-row>
    </b-container>
  
  </section>
  <section class="contacto">
    <b-card title="Más éxito para tu evento"
            sub-title="Card subtitle"
            class="text-center">
        <p class="card-text">
            Somos una joven agencia de modelos y edecanes ubicada en Matagalpa, Nicaragua. 
            Te ayudamos a presentar tu marca o evento de manera exitosa, 
            encantar a tus clientes y comunicarles correctamente el mensaje de tus productos o servicios.
        </p>
        <b-btn variant="primary" href="#">+ Info</b-btn>
    </b-card>
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
  min-height: 100vh;
  background-position: center;
   }
  .container{
    min-height: 90vh;
  }

</style>


<style>

.header .container{
  justify-content: center;
}
.container {
  
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

.servicios img{
   max-width: 400px;
   height: 100%;
   width:100%;
}
.right{
  text-align:right;
}
.left{
  text-align:left;
}


</style>
