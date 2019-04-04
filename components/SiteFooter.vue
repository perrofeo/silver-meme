<template>
    
    <div class="site-footer text-center full-width">
        <div class="footer-container">
           <div class="hr hr--top">
			<nuxt-link to="/" id="cta-footer-glammyLogo">
				<img src="~/assets/GLAMMY_FAVICON.svg" aria-label="Glammy" class="logo" width="40" height="40">
				
			</nuxt-link>
			<div class="footer-nav">
				<nuxt-link to="/servicios">Servicios</nuxt-link>
				<nuxt-link to="/portafolio">Portafolio</nuxt-link>
				<nuxt-link to="/contacto">Contacto</nuxt-link>
			</div>
		   </div>
           <div class="footer-nav nav--inline nav--social">
			<ul>
				<li>
					<a href="tel:+50585014766" target="_blank" rel="noopener">
						<img src="~/assets/icon-tel.svg" class="icon" width="32">
					</a>
				</li>
				<li>
					<a href="mailto:contacto@glammymodelos.com">
						<img src="~/assets/icon-mail.svg" class="icon" width="32">
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/glammymodelos/" target="_blank" rel="noopener">
						<img src="~/assets/icon-fb.svg" class="icon" width="32">
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/channel/UCW7eKWpIIC1RCCYCFsyWbLg" target="_blank" rel="noopener">
						<img src="~/assets/icon-youtube.svg" class="icon" width="32">
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/glammymodelos1/" target="_blank" rel="noopener">
						<img src="~/assets/icon-ig.svg" class="icon" width="32">
					</a>
				</li>
			</ul>
		</div>
           <p>Glammy Modelos y Edecanes © 2019</p>
           <!-- <div>Contáctanos<fa :icon="['fas', 'dollar-sign']" /></div> -->
        </div>
   </div>
</template>
<style>
   .site-footer{
  display: block; 
  color: rgba(14,30,37,.38);
  font-size: .85rem;
  padding-bottom: 2.618em;
  text-align: center;
}
.footer-container{
    box-sizing: content-box;
    margin: 0 auto;
    max-width: 60rem;
    padding: 0 1em;
    position: relative;
}
.site-footer .hr--top {
    padding-top: 2.618em;
    display: block;
}
.hr {
    position: relative;
}
.footer-nav{
    margin: 1em auto 0;
    max-width: 20.03em;
    display: flex;
    justify-content: space-between;
    
}
.footer-nav a {
	color: #838383;
	font-size: 0.95rem;
}
.footer-nav p {
	color: #838383;
}
.site-footer ul {
    flex: 1;
    margin-bottom: 0;
    list-style: none;
}
.footer-nav ul {
    line-height: 2;
    margin: 1em 0;
    padding-left: 0;
}
.nav--inline {
    align-items: center;
    justify-content: flex-start;
}
.nav--inline ul {
    align-items: center;
    display: flex;
    justify-content:space-around;
    padding-inline-start: 0px;
	padding-bottom: 50px;
}
</style>


