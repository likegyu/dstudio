// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {   
    var navbar = document.getElementsByClassName("navbar");
    document.getElementById("center").style.backgroundColor = "#f9bb00d0";
    for(var n in navbar) navbar[n].style.height = "30px";
  } else {
    document.getElementById("center").style.backgroundColor = "#f9bc00";
    for(var n in navbar) navbar[n].style.height = "60px";
  }
  //scrollbar
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}