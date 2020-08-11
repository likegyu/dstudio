// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
var navbar = document.getElementsByClassName("navbar");

function scrollFunction() {
  //progressbar
  document.getElementById("myBar").style.width = scrolled + "%";
  //barcolor
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById("center").style.backgroundColor = "#f9bb00d0";
  } else{
    document.getElementById("center").style.backgroundColor = "#f9bc00";
  }
  //shrinkbar
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    for(var n in navbar) navbar[n].style.height = "30px";
    } else{
    for(var n in navbar) navbar[n].style.height = "60px";
   }
}