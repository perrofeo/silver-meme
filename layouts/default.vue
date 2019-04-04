<template>
<div>
  
  
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
  font-family: 'Open Sans', sans-serif;
}

h1{
  letter-spacing: -0.03em;
  color: #424242;
}

h2{
  letter-spacing: -0.02em;
  font-weight: 700;
  font-size: 1.8rem;
  color: #424242;
}
h4 {
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #424242;
}
p {
  color: #595959;
}
.card {
  border: none;
  background-color: transparent;
}
.contacto {
  padding: 1rem 0;
  background-color: #f2f2f2;
}
 .navbar-nav a{
  color: rgba(255, 255, 255, 0.6);
}
.navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: transparent;
}
.navbar-light .navbar-nav .nav-link.active {
     color: white;
}
 .navbar-light .navbar-nav .nav-link:hover {
    color: white;
    
}
.inicio .nav-link.active {
     color: rgba(255, 255, 255, 0.6)!important;

}
.inicio .nav-link:hover{
     color: white!important;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s
}
.page-enter, .page-leave-active {
  opacity: 0
}

.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% { transform: scale(0) }
  50% { transform: scale(1.5) }
  100% { transform: scale(1) }
}
@keyframes bounce-out {
  0% { transform: scale(1) }
  50% { transform: scale(1.5) }
  100% { transform: scale(0) }
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
.btn {
  transition: none;
}
.btn-primary {
  background: rgba(241,64,33,1);
background: -moz-linear-gradient(left, rgba(241,64,33,1) 0%, rgba(247,100,32,1) 12%, rgba(250,153,35,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(241,64,33,1)), color-stop(12%, rgba(247,100,32,1)), color-stop(100%, rgba(250,153,35,1)));
background: -webkit-linear-gradient(left, rgba(241,64,33,1) 0%, rgba(247,100,32,1) 12%, rgba(250,153,35,1) 100%);
background: -o-linear-gradient(left, rgba(241,64,33,1) 0%, rgba(247,100,32,1) 12%, rgba(250,153,35,1) 100%);
background: -ms-linear-gradient(left, rgba(241,64,33,1) 0%, rgba(247,100,32,1) 12%, rgba(250,153,35,1) 100%);
background: linear-gradient(to right, rgba(241,64,33,1) 0%, rgba(247,100,32,1) 12%, rgba(250,153,35,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f14021', endColorstr='#fa9923', GradientType=1 );
border: none;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  background: #df5735;
}
.btn-primary:not(:disabled):not(.disabled):active:focus {
  box-shadow: none;
}
.btn-primary:focus {
  box-shadow: none;
}
.btn-primary:not(:disabled):not(.disabled):active{
  background-color: #df5735;
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

.navbar-light .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.6);
    text-align: right;
}
.portada{
  
    background-size: cover;
    background-repeat: no-repeat;
    
    
}
.display-3 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
}
.lead {
    font-size: 1.1rem;
    font-weight: 300;
    padding: 1rem;
}
.contacto .card{
  max-width: 600px;
}
.contacto{
  display: flex;
  justify-content: center;
}

@media (max-width: 500px) {
  h1 {
    font-size: 2.6rem;
  }
  
}
</style>
