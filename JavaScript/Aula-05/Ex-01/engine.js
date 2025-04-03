//selecionano por marca
var corpo = window.document.body;
var p1 = window.document.getElementsByTagName('p')[0];
//window.document.write('Olá, mundo!');

//corpo.style.background = 'black'

//window.document.write('está escrito assim: ' + p1.innerText);
//p1.style.color ='blue'

//seleionando por id
//var d = window.document.getElementById('msg');
//d.style.background = 'green';
//d.innerText = 'Estou aqui..';

//window.document.getElementById('msg').innerText='Estou aqui...';

var d = window.document.querySelector('div#msg');
d.style.color ='blue';