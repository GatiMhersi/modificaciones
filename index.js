var dato = document.getElementsByClassName("precio-anterior");
var archivoTXT = new XMLHttpRequest();
var fileRuta = 'index.txt';

archivoTXT.open("GET", fileRuta, false);
archivoTXT.send(null);
var txt = archivoTXT.responseText;
dato.innerText = txt.split(",")[1];
