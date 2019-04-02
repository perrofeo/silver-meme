<template>
    
    <div class="site-footer text-center full-width">
        <div class="footer-container">
           <div class="hr hr--top">
			<b-link to="/" id="cta-footer-glammyLogo">
				<img src="~/assets/GLAMMY_FAVICON.svg" aria-label="Glammy" class="logo" width="40" height="40">
				
			</b-link>
			<div class="footer-nav">
				<nuxt-link to="/servicios">Servicios</nuxt-link>
				<nuxt-link to="/portafolio">Portafolio</nuxt-link>
				<nuxt-link to="/contacto">Contacto</nuxt-link>
			</div>
		   </div>
           <div class="footer-nav nav--inline nav--social">
			<ul>
				<li>
					<a href="#" id="cta-footer-twitter">
						<svg aria-hidden="true" class="icon" width="16" height="16">
							<use xlink:href="#icon-twitter"></use>
						</svg>
						<span class="visuallyhidden">Twitter</span>
					</a>
				</li>
				<li>
					<a href="#" id="cta-footer-github">
						<svg aria-hidden="true" class="icon" width="16" height="16">
							<use xlink:href="#icon-github"></use>
						</svg>
						<span class="visuallyhidden">GitHub</span>
					</a>
				</li>
				<li>
					<a href="#" id="cta-footer-gitter">
						<svg aria-hidden="true" class="icon" width="16" height="16">
							<use xlink:href="#icon-gitter"></use>
						</svg>
						<span class="visuallyhidden">Gitter</span>
					</a>
				</li>
				<li>
					<a href="#" id="cta-footer-youtube">
						<svg aria-hidden="true" class="icon" width="16" height="16">
							<use xlink:href="#icon-youtube"></use>
						</svg>
						<span class="visuallyhidden">Youtube</span>
					</a>
				</li>
			</ul>
		</div>
           <p>Glammy Modelos y Edecanes © 2018</p>
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
    max-width: 29.03em;
    display: flex;
    justify-content: space-between;
    
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
    justify-content: center;
    padding-inline-start: 0px;
}
</style>


