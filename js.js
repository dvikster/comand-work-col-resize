/**
 * Created by UpscaleAcademy on 08.05.2017.
 */
var div=document.getElementById('wrapper').getElementsByTagName('div');

console.log(div);

var h=[];
function mxH() {
    for (var i=0; i< div.length; i++) {
        h[i]=div[i].offsetHeight;
        console.log(h);
    }
    var h1= Math.max.apply(null,h);
    console.log(h1);

    for (i=0; i< div.length; i++) {
        div[i].style.height=h1+'px';
    }

    if (div[0].innerHTML =='') {
        div[0].style.display='none';
        div[1].style.width='66%';
    }
    else if  (div[2].innerHTML =='') {
        div[2].style.display='none';
        div[1].style.width='81%';
    }
}
mxH();

window.onresize = function () {
    for (var i=0; i< div.length; i++) {
        div[i].style.height='auto';
    }
    mxH();
}

