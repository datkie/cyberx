window.onscroll = function() {scrollFunction()};
let navbar = document.querySelector(".disc");
let logo = document.querySelector(".logo");
let logos = document.querySelector(".logmo");

let navbari = document.querySelector(".navs");
let fi = document.querySelector(".firs");
let se = document.querySelector(".sec");
let about = document.querySelector(".about");
let nes = document.querySelector(".nes");
let mob = document.querySelector(".mob");

let startusbar = "false";
let barsd = document.getElementById("sd");
let barst = document.getElementById("st");
let barse = document.getElementById("se");
let navbarm =  document.querySelector(".mobs");

function myFunction(x) {

  if (startusbar === "false"){
    mob.style.height ="600px";
    barst.backgroundColor ="black";
    barse.backgroundColor ="black";
    navbarm.style.display ="block";
    x.classList.toggle("change");
    mob.style.backgroundColor ="white";
    navbarm.style.backgroundColor ="white";
    startusbar = "true";
    logos.style.color ="black";
    bars.backgroundColor ="black";
    

  }
  else if(startusbar === "true"){
    mob.style.height ="29px";
    barst.background ="black";
    barse.backgroundC ="black";
    barsd.background ="black";
    mob.style.backgroundColor ="#0f256e";
    navbarm.style.display ="none";
    x.classList.toggle("change");
    startusbar = "false";
    logos.style.color ="white";
    barss.backgroundColor ="black";
    barsf.backgroundColor ="black";
    bars3.backgroundColor ="black";


  }


  


}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mob.style.backgroundColor ="white";
    navbarm.style.backgroundColor ="white";
    navbar.style.boxShadow = "1px 1px 1px grey";
    navbar.style.backgroundColor = "white";
    navbar.style.height = "29px";
    navbari.style.color = "#262d3d";
    fi.style.color = "#262d3d";
    se.style.color = "#262d3d";
    logo.style.color = "#262d3d";
    se.style.color = "#262d3d";
    about.style.color = "#262d3d";
    nes.style.color = "#white";
    logo.style.fontSize = "30px";
    logos.style.color ="#0f256e";
    y.classList.toggle("");
    
  




    
  } else {
    logos.style.color ="white";
    barse.style.color ="#0f256e";
    mob.style.backgroundColor ="#0f256e";
    navbar.style.height = "29px";
    logo.style.fontSize = "25px";
    navbar.style.backgroundColor = "#0f256e";
    navbar.style.boxShadow = "none";
    navbari.style.color = "white";
    fi.style.color = "white"
    nes.style.color = "white"
    about.style.color = "white";;
    se.style.color = "white";
    logo.style.color = "white";
  }
}

