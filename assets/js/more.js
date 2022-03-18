window.onload = function() {
var p = document.getElementById('p');
var morebtn = document.getElementById('morebtn');

if (p.scrollHeight > 340){
    morebtn.style.display = 'block';
    }
}
var rotation = 0;
function moreBtn() {
    if(rotation == 0){
    p.style.position = 'absolute';
    p.style.height = '340px';
    morebtn.style.position = 'absolute';
    morebtn.style.top = '385px';
    morebtn.style.left = 'calc(100% - 38px)';
    morebtn.style.transform = 'rotate(180deg)';
    rotation ++
    } else {
        p.style.position = '';
        p.style.height = '';
        morebtn.style.position = '';
        morebtn.style.top = '';
        morebtn.style.left = '';
        morebtn.style.transform = '';
        rotation = 0;
    }
}
