<template>
<div>
  <section class="header">
    <div class="container">
      <div>
      
      <h1 class="title">
        Glammy
      </h1>
      <h2 class="subtitle">
        Modelos y Edecanes
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
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

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
