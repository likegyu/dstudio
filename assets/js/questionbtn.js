function openQuestion() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.getElementById("closebtn").style.display = "inline-block";
        document.getElementById("questionbtn").style.display = "none";
        document.getElementById("infotext").style.display = "inline-block";
        document.getElementById("contenthide").style.display = "none";
        document.getElementsByTagName("html")[0].style.background = "#f5f5f5";
        document.getElementById('footerp').style.color = '#323232';
        document.getElementById('footera').style.color = '#525252';
    } else {
        document.getElementById("closebtn").style.display = "inline-block";
        document.getElementById("questionbtn").style.display = "none";
        document.getElementById("infotext").style.display = "inline-block";
        document.getElementById("contenthide").style.display = "none";
        document.getElementsByTagName("html")[0].style.background = "#151515";
        document.getElementById('footerp').style.color = 'rgb(226, 226, 226)';
        document.getElementById('footera').style.color = 'white';
    }
}
function closeQuestion() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.getElementById("questionbtn").style.display = "inline-block";
        document.getElementById("closebtn").style.display = "none";
        document.getElementById("contenthide").style.display = "inline-block";
        document.getElementById("infotext").style.display = "none";
        document.getElementsByTagName("html")[0].style.background = "#151515";
        document.getElementById('footerp').style.color = 'rgb(226, 226, 226)';
        document.getElementById('footera').style.color = 'white';
    } else {
        document.getElementById("questionbtn").style.display = "inline-block";
        document.getElementById("closebtn").style.display = "none";
        document.getElementById("contenthide").style.display = "inline-block";
        document.getElementById("infotext").style.display = "none";
        document.getElementsByTagName("html")[0].style.background = "#f5f5f5";
        document.getElementById('footerp').style.color = '#323232';
        document.getElementById('footera').style.color = '#525252';
    }
}