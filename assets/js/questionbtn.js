function openQuestion() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.getElementsByTagName("html")[0].style.background = "#f5f5f5";
    } else {
        document.getElementById("closebtn").style.display = "inline-block";
        document.getElementById("questionbtn").style.display = "none";
        document.getElementById("infotext").style.display = "inline-block";
        document.getElementById("contenthide").style.display = "none";
        document.getElementsByTagName("html")[0].style.background = "#151515";
    }
}
function closeQuestion() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.getElementsByTagName("html")[0].style.background = "#151515";
    } else {
        document.getElementById("questionbtn").style.display = "inline-block";
        document.getElementById("closebtn").style.display = "none";
        document.getElementById("contenthide").style.display = "inline-block";
        document.getElementById("infotext").style.display = "none";
        document.getElementsByTagName("html")[0].style.background = "#f5f5f5";
    }
}