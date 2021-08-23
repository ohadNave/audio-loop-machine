<template>
  <div>   
    <header class="header-fixed">
	<div class="header-limiter">
	<h1><a href="#">Loop<span>Machine</span></a></h1>
	</div>
    </header>
    <div class="left-column"></div>
    <div class="center-column">
        <Grid/>
        <div style="margin-top:4%" >
            <span class="container-sm" >
            <PlayerComponent/>
            <RecorderComponent/>
            </span>
        </div>
    </div> 
    <div class="right-column"></div>
    <div class="footer">
    </div>
    </div>
</template>

<script>
import Grid from '../components/Grid.vue'
import RecorderComponent from '../components/RecorderComponent.vue'
import PlayerComponent from '../components/PlayerComponent.vue'

export default {
  components: {
    Grid,
    RecorderComponent,
    PlayerComponent
  }
}
</script>

<style>
body {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  text-transform: uppercase;
}
@supports (display: grid)
 {
   /* .l-grid {
     background: #3fb3d3;
     color: white;
     display: grid;
     grid-template-columns: 25% 50% 25%;
    } */
   .header, .footer, .left-column, .center-column, .right-column {
     margin: 5px;
     padding: 30px;
     text-align: center;
   }
   .header, .footer {
     grid-column-start: 1;
     grid-column-end: end;
   }
   .left-column {
   }
   .center-column {
   }
   .right-column {
   }
   
}


@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

html{
	background-color: #eaf0f2;
}

body{
	font:14px/1.5 Arial, Helvetica, sans-serif;
	padding:0;
	margin:0;
}

.menu{
	text-align: center;
	padding-top: 25px;
	/* margin-bottom:200px; */
}


.menu h1{
	margin-top:0;
	font: normal 32px/1.5 'Open Sans', sans-serif;
	color: #3F71AE;
	/* padding-bottom: 16px; */
}




/* -- Demo ads -- */

@media (max-width: 1200px) {
	#bsaHolder{ display:none;}
}

/* -- Link to Tutorialzine -- */

.tz-link{
	text-decoration: none;
	color: #fff !important;
	font: bold 36px Arial,Helvetica,sans-serif !important;
}

.tz-link span{
	color: #da431c;
}

.header-fixed {
	background-color:#292c2f;
	box-shadow:0 1px 1px #ccc;
	padding: 20px 40px;
	height: 80px;
	color: #ffffff;
	box-sizing: border-box;
	top:-100px;

	-webkit-transition:top 0.3s;
	transition:top 0.3s;
}

.header-fixed .header-limiter {
	max-width: 1200px;
	text-align: center;
	margin: 0 auto;
}

/*	The header placeholder. It is displayed when the header is fixed to the top of the
	browser window, in order to prevent the content of the page from jumping up. */

.header-fixed-placeholder{
	height: 80px;
	display: none;
}

/* Logo */

.header-fixed .header-limiter h1 {
	float: left;
	font: normal 28px Cookie, Arial, Helvetica, sans-serif;
	line-height: 40px;
	margin: 0;
}

.header-fixed .header-limiter h1 span {
	color: #5383d3;
}

/* The navigation links */

.header-fixed .header-limiter a {
	color: #ffffff;
	text-decoration: none;
}

.header-fixed .header-limiter nav {
	font:16px Arial, Helvetica, sans-serif;
	line-height: 40px;
	float: right;
}

.header-fixed .header-limiter nav a{
	display: inline-block;
	padding: 0 5px;
	text-decoration:none;
	color: #ffffff;
	opacity: 0.9;
}

.header-fixed .header-limiter nav a:hover{
	opacity: 1;
}

.header-fixed .header-limiter nav a.selected {
	color: #608bd2;
	pointer-events: none;
	opacity: 1;
}

/* Fixed version of the header */

body.fixed .header-fixed {
	padding: 10px 40px;
	height: 50px;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
}

body.fixed .header-fixed-placeholder {
	display: block;
}

body.fixed .header-fixed .header-limiter h1 {
	font-size: 24px;
	line-height: 30px;
}

body.fixed .header-fixed .header-limiter nav {
	line-height: 28px;
	font-size: 13px;
}


/* Making the header responsive */

@media all and (max-width: 600px) {

	.header-fixed {
		padding: 20px 0;
		height: 75px;
	}

	.header-fixed .header-limiter h1 {
		float: none;
		margin: -8px 0 10px;
		text-align: center;
		font-size: 24px;
		line-height: 1;
	}

	.header-fixed .header-limiter nav {
		line-height: 1;
		float:none;
	}

	.header-fixed .header-limiter nav a {
		font-size: 13px;
	}

	body.fixed .header-fixed {
		display: none;
	}

}



body {
	margin: 0;
	padding: 0;
	height: 1500px;
}





.btns{
  background: grey;

  overflow: hidden; 
    text-align: center;
}


.container-sm{
    align-items: center;
    border-radius: 15px;
    border: 2px solid grey;
    padding: 25px 20px 10px ;
    
}


</style>