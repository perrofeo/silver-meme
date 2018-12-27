<template>
<div>
  <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/">
        <img src="~/assets/GLAMMY_FAVICON.svg" aria-label="Glammy" class="logo" width="40" height="40">Glammy
  </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
       <b-nav-item href="/servicios">Servicios</b-nav-item>
       <b-nav-item href="#">Portafolio</b-nav-item>
       <b-nav-item href="#">Contacto</b-nav-item>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
  
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body{
  font-family: 'Poppins', sans-serif;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
