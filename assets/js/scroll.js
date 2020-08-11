// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //progressbar
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  //barcolor
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
    document.getElementById("center").style.backgroundColor = "#f9bb00d0";
  } else{
    document.getElementById("center").style.backgroundColor = "#f9bc00";
  }
  //shrinkbar
  var navbar = document.getElementsByClassName("navbar");
  var icon = document.getElementsByClassName("icon");
  var menu = document.getElementsByClassName("menu");

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
    for(var i = 0; i < 1; i++)
    navbar[i].style.height = "30px";
    icon[i].style.width = "0"; icon[i].style.overflow = "hidden";
    menu[i].style.width = "0"; menu[i].style.overflow = "hidden";
    } else{
    for(var i = 0; i < 1; i++) navbar[i].style.height = "60px";
    icon[i].style.width = ""; icon[i].style.overflow = "";
    menu[i].style.width = ""; menu[i].style.overflow = "";
   }
}