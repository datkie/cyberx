window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".disc").style.boxShadow = "1px 1px 5px grey";
    document.querySelector(".disc").style.backgroundColor = "white";
    document.querySelector(".navs").style.color = "#262d3d";
    document.querySelector(".firs").style.color = "#262d3d";
    document.querySelector(".sec").style.color = "#262d3d";
    document.querySelector(".logo").style.color = "#262d3d";
    document.querySelector(".logo").style.fontSize = "30px";
    document.querySelector(".navs::after").style.animation = "dats2 1s forwards;";
    document.querySelector(".navs::after").style.opacity = "1";
  document.querySelector(".navs::after").style.width = "100%";
  




    
  } else {
    document.querySelector(".logo").style.fontSize = "25px";
    document.querySelector(".disc").style.backgroundColor = "#0f256e";
    document.querySelector(".disc").style.boxShadow = "none";
    document.querySelector(".navs").style.color = "white";
    document.querySelector(".firs").style.color = "white";
    document.querySelector(".sec").style.color = "white";
    document.querySelector(".logo").style.color = "white";
  }
}
