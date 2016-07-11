var box = document.getElementById("box");
var imagen = box.getElementsByTagName("img");
var medidas = [
    [imagen.item(1).width, imagen.item(1).height],
    [imagen.item(4).width, imagen.item(4).height],
];
// 1072 - 949 // 0,0 - 0,1
// 530 - 949 // 1,0 - 1,1

var front = document.getElementsByClassName("portada");
var back = document.getElementsByClassName("contraportada");
var left = document.getElementsByClassName("izquierda");
var right = document.getElementsByClassName("derecha");
var tp = document.getElementsByClassName("arriba");
var frontSrc = imagen[0].getAttribute("src");
var backSrc = imagen[1].getAttribute("src");
var topSrc = imagen[2].getAttribute("src");
var leftSrc = imagen[4].getAttribute("src");
var rightSrc = imagen[5].getAttribute("src");





// function replaceContentInContainer(matchClass, content) {
// var elems = document.getElementsByTagName('*'), i;
// for (i in elems) {
// if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
// > -1) {
// elems[i].innerHTML = content;
// }
// }
// }

// 
// var addClass = function ( ev, obj, state ) {
//       var direction = getDirection( ev, obj ),
//           class_suffix = "";

//       obj.className = "";

//       switch ( direction ) {
//           case 0 : class_suffix = '-top';    break;
//           case 1 : class_suffix = '-right';  break;
//           case 2 : class_suffix = '-bottom'; break;
//           case 3 : class_suffix = '-left';   break;
//       }

//       obj.classList.add( state + class_suffix );
//  };
//  

console.log(medidas[1][0], medidas[1][1]);
// console.log(topSrc);

function calculo(ancho, alto) {
    var frente = (230 * 100) / ancho;
    var lado = (frente * alto) / 100;
    // var frenteAlto = lado;
    // var frenteAncho =;
    var ladoAlto = lado;
    var ladoAncho = 115;
    console.log("frenteAlto: " + lado + " frenteAncho: " + 230);
    console.log("leftAlto: " + ladoAlto + " leftAncho: " + ladoAncho);
    console.log("topAlto: " + ladoAncho + " topAncho: " + 230);


};
calculo(medidas[0][0], medidas[0][1]);

function tamano(element, x, y) {
    var cuboFrenteAncho = imagen[0].style.width = x;
    var cuboFrenteAncho = imagen[0].style.height = y;
};

tamano(imagen[0], 230, 200);
var t = tp[0].style.backgroundImage = 'url(' + topSrc + ')';
var f = front[0].style.backgroundImage = 'url(' + frontSrc + ')';
var b = back[0].style.backgroundImage = 'url(' + backSrc + ')';
var l = left[0].style.backgroundImage = 'url(' + leftSrc + ')';
var r = right[0].style.backgroundImage = 'url(' + rightSrc + ')';


// console.log(t);
// for (var i in front) {
//     console.log(i);
// };
// console.log(top[0]);
// console.log("H " + frente.height + " W " + frente.width);
// for (var i in imagen) {
//     console.log(imagen.item(i).clientWidth + " " + imagen.item(i).clientHeight);

// };
// console.log(box.getElementsByTagName("img"));

// var caja = ["img/packF.jpg", "img/packB.jpg", "img/packT.jpg", "img/packL.jpg", "img/packR.jpg"];