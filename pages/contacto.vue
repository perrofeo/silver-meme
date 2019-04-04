<template>
  <div>
    <div id="contacto" class="portada">
  
  <b-navbar toggleable="md" type="light" variant="">

  <b-navbar-brand to="/">
        <img src="~/assets/LOGOPORTADA.svg" aria-label="Glammy" class="logo" width="auto" height="34" alt="logo Glammy">
  </b-navbar-brand>

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
       <b-nav-item class="inicio" to="/">Inicio</b-nav-item>
       <b-nav-item to="/servicios">Servicios</b-nav-item>
       <b-nav-item to="/portafolio">Portafolio</b-nav-item>
       <b-nav-item class="linkcont" to="/contacto">Contacto</b-nav-item>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <div class="portada-contacto text-center">
      <div class="glammy_img">
            <img src="~/assets/LOGO_JONATHAN.png" alt="logo Glammy">
          </div>
    </div>
</div>

    <b-container class="bv-example-row text-center text-contacto">
          
        <h2>Trabajemos juntos</h2>
        <p>Si buscas un equipo profesional y creativo para
que tu evento o acción de marketing se vuelva
todo un éxito, contáctanos.</p>
        <div class="nav--inline2">
			<ul>
				<li>
					<a href="tel:+50585014766" target="_blank" rel="noopener">
						<img src="~assets/icon-tel2.svg" class="icon-tel" width="50" alt="icon-telefono" title="Teléfono">
					</a>
				</li>
				<li>
					<a href="https://m.me/glammymodelos" target="_blank" rel="noopener">
						<img src="~assets/icon-msg.svg" class="icon" width="50" alt="icon-messenger" title="Messenger">
					</a>
				</li>
			</ul>
		</div>
        <p>Llámanos al<br>
        <a href="tel:+50585014766" target="_blank" rel="noopener">+505 85014766</a></p>
        <p>Correo electrónico<br>
          <a href="mailto:contacto@glammymodelos.com">contacto@glammymodelos.com</a></p>
</b-container>

    
    
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
  .portada {
    background-position: top;
  }
  .nav--inline2 {
    align-items: center;
    justify-content: flex-start;
    padding: 0.6rem 0;
}
.nav--inline2 ul {
    align-items: center;
    display: flex;
    justify-content:center;
    padding-inline-start: 0px;
	padding-bottom: 0px;
  list-style: none;
  padding-left: 0;
}
.icon-tel {
  margin-right: 30px;
}
</style>

<style>
  .portada{
         background-image: url("~assets/GLAMMY_background_CONTACTO.svg");

         min-height: 40vh;
    }
    
    .glammy_img{
      margin: auto;
    }
    .glammy_img img{
      max-width: 300px;
      width: 100%;
      height: 100%;
    }
    .portada-contacto{
      padding-top: 100px;
    }
    .text-contacto {
      max-width: 600px;
      padding: 2rem 2rem;
    }
    .text-contacto a {
      color: #424242;
      font-weight: 700;
    }
    @media (max-width: 768px) {
  .linkcont a{
    color: #424242 !important;
  }
  
}
</style>

    
    