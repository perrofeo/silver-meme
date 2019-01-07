<template>
    
    <div class="site-footer text-center full-width">
        <div class="footer-container">
           <div class="hr hr--top">
			<b-link to="/" id="cta-footer-glammyLogo">
				<img src="~/assets/GLAMMY_FAVICON.svg" aria-label="Glammy" class="logo" width="40" height="40">
				
			</b-link>
			<div class="footer-nav">
				<ul>
					<li><a href="/features" id="cta-footer-features">Features</a></li>
					<li><a href="/pricing" id="cta-footer-pricing">Pricing</a></li>
					<li><a href="/docs" id="cta-footer-docs">Docs</a></li>
					<li><a href="/blog" id="cta-footer-blog">Blog</a></li>
				</ul>
				<ul>
					<li><a href="/about" id="cta-footer-about">About</a></li>
					<li><a href="/careers" id="cta-footer-careers">Careers</a></li>
					<li><a href="/press" id="cta-footer-press">Press</a></li>
					<li><a href="/open-source" id="cta-footer-opensource">Open Source</a></li>
				</ul>
				<ul>
					<li><a href="https://netlifystatus.com/" id="cta-footer-status">Status</a></li>
					<li><a href="/support" id="cta-footer-support">Support</a></li>
					<li><a href="/enterprise" id="cta-footer-enterprise">Enterprise</a></li>
					<li><a href="/education" id="cta-footer-education">Education</a></li>
				</ul>
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


