// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //progressbar
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  /*barcolor
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById("center").style.backgroundColor = "#f9bb00d0";
  } else{
    document.getElementById("center").style.backgroundColor = "#f9bc00";
  }
  */
  //shrinkbar
  var navbar = document.getElementsByClassName("navbar");
  var icon = document.getElementsByClassName("icon");
  var menu = document.getElementsByClassName("menu");
  var insta = document.getElementsByClassName("fab fa-instagram");
  var soundcloud = document.getElementsByClassName("fab fa-soundcloud");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    for(var i = 0; i < 1; i++)
    navbar[i].style.height = "20px";
    for(var i = 0; i < 1; i++)
    icon[i].style.transform = "translateY(-100px)";
    for(var i = 0; i < 1; i++)
    menu[i].style.transform = "translateY(-100px)";
    for(var i = 0; i < 1; i++)
    insta[i].style.margin = "0";
    for(var i = 0; i < 1; i++)
    soundcloud[i].style.margin = "0";
    } else{
    for(var i = 0; i < 1; i++)
    navbar[i].style.height = "60px";
    for(var i = 0; i < 1; i++)
    icon[i].style.transform = "";
    for(var i = 0; i < 1; i++)
    menu[i].style.transform = "";
    for(var i = 0; i < 1; i++)
    insta[i].style.margin = "";
    for(var i = 0; i < 1; i++)
    soundcloud[i].style.margin = "";
   }
}