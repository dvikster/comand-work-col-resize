/**
 * Created by UpscaleAcademy on 08.05.2017.
 */
var div=document.getElementById('wrapear').getElementsByTagName('div');

console.log(div);


var h=[];
function mxH() {
    for (var i=0; i< div.length; i++) {
        h[i]=div[i].offsetHeight;
        console.log(h);
        var h1= Math.max.apply(null,h);
        console.log(h1);
    }
    for (var i1=0; i1< div.length; i1++) {
        div[i1].style.height=h1+'px';
    }
}
mxH();
