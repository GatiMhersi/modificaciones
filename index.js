var dato = document.getElementsByClassName("precio-anterior");
var archivoTXT = new XMLHttpRequest();
var fileRuta = 'index.txt';

archivoTXT.open("GET", fileRuta, false);
archivoTXT.send(null);
var txt = archivoTXT.responseText;
for(var i = 0; i<dato.length; i++){
    dato[i].innerText = txt.split(",")[1];
}
