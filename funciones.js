var botones = document.querySelectorAll("header a");
var secciones = document.querySelectorAll(".tabs > div");
for(var item of botones) {
    item.onclick = function() {
        // quitamos .activo a todos los enlaces y las secciones
        desactivaTodos();
        // Obtengo el hash del enlace donde he clicado
        //console.log(this.href, this.hash);
        var yuyu = this.hash;
        // Añado la clase .activo al item actual
        this.classList.add("activo");
        // Y también al <section> que corresponde con el item actual
        document.querySelector(yuyu).classList.add("activo");
    }
}
function desactivaTodos() {
    for(var item of botones) item.classList.remove("activo");
    for(var item of secciones) item.classList.remove("activo");
}
////////////////////////////////////             RELOJ   DIGITAL          //////////////////////////////////////////////////
var hora = document.querySelector("#hora");
var minutos = document.querySelector("#minutos");
var segundos = document.querySelector("#segundos");
var fecha = document.querySelector("#fecha");

var cronoeu = setInterval(actualizaReloj, 1000);

function actualizaReloj(){
    var orduaeguna = new Date();
    var hheu = orduaeguna.getHours();
    var mineu = orduaeguna.getMinutes();
    var segeu = orduaeguna.getSeconds();
    anoeu = orduaeguna.getFullYear();
    meseu = orduaeguna.getMonth() + 1;
    diaeu = orduaeguna.getDate();
    ///////////////////////////////////////////////////      HORA     //////////////////////////////////////////////
    hora.innerHTML = hheu;
    if(mineu < 10){
        minutos.innerHTML = "0" + mineu; 
    }
    else{
        minutos.innerHTML = mineu;
    }
    if(segeu < 10){
        segundos.innerHTML = "0" + segeu;
    }
    else{
        segundos.innerHTML = segeu;
    }
    ////////////////////////////////////////////////////    DIA FECHA     ///////////////////////////////////////////
    if(meseu < 10 && diaeu < 10){
        fecha.innerHTML = anoeu + "/0" + meseu + "/0" + diaeu;
    }
    else if(meseu < 10){
        fecha.innerHTML = anoeu + "/0" + meseu + "/" + diaeu;
    }
    else if(diaeu < 10){
        fecha.innerHTML = anoeu + "/" + meseu + "/0" + diaeu;
    }
    else{
        fecha.innerHTML = anoeu + "/" + meseu + "/" + diaeu;
    }
}
actualizaReloj();
/////////////////////////////////////////////////////    RELOJ ANALÓGICO    ///////////////////////////////////////////////////////
var mHoras = document.querySelector("#mHoras");
		var mMinutos = document.querySelector("#mMinutos");
		var mSegundos = document.querySelector("#mSegundos");
		
		var crono = setInterval(actualizaReloj2, 1000);
		
		var numeros = document.querySelectorAll(".numCont");
		for(var i=0; i-numeros.length; i++) {
			var item = numeros[i];
			var subitem = item.querySelector("span");
			var angulo = i*30-60;
			item.style.transform = "rotate(" + angulo + "deg)";
			subitem.style.transform = "rotate(" + (-angulo) + "deg)";
		}
		
		
		function actualizaReloj2() {
			var tiempo = new Date();
			var hora = tiempo.getHours();
			var minuto = tiempo.getMinutes();
			var segundo = tiempo.getSeconds();
			
			mSegundos.style.transform = "rotate(" + (segundo*6-90) + "deg)";
			mMinutos.style.transform = "rotate(" + (minuto*6-90) + "deg)";
			mHoras.style.transform = "rotate(" + (hora*30-90) + "deg)";
		}
		
		actualizaReloj2();
/////////////////////////////////////////////////////    CRONOMETRO         ///////////////////////////////////////////////////////
var cronoh = document.querySelector("#cronohora");
var cronom = document.querySelector("#cronomin");
var cronos = document.querySelector("#cronoseg");
var sec = 0;
var mins = 0;
var hrs = 0;
var t;
cronoh.innerHTML = "00";
cronom.innerHTML = "00";
cronos.innerHTML = "00";

function tick(){
    sec++;
    if (sec < 10) 
    {
    sec = "0" + sec;
    cronos.innerHTML = sec;
    console.log(hrs + " - " + mins);
    }
    else if (sec >= 10 && sec < 60) 
    {
    cronos.innerHTML = sec;
    }
    else if (sec >=60)
    {  
        sec = 0;
        mins++;
        cronos.innerHTML = "0" + sec;
        if (mins < 10) {
            mins = "0" + mins;
            cronom.innerHTML = mins;
        }
        else if (mins >= 10 && mins < 60) 
        {
            cronom.innerHTML = mins;
        }
        else if(mins >=60)
        {
            mins = 0;
            hrs++;
            cronom.innerHTML = "0" + mins;
            if (hrs < 10) {
                hrs = "0" + hrs;
                cronoh.innerHTML = hrs;
            }
            else if (hrs >= 10 && hrs < 24) {
                cronoh.innerHTML = hrs;
            }
            else if (hrs >=24){
                sec = 0;
                mins = 0;
                hrs = 0;
                cronoh.innerHTML = "00";
                cronom.innerHTML = "00";
                cronos.innerHTML = "00";
            }
        }
    }
    iniciar();
}
function iniciar() {
    t = setTimeout(tick, 1000);
}
function parar()
{
    if(hrs = 0){
        cronoh.innerHTML = "0" + hrs;
    }
    else if(hrs > 0){
        cronoh.innerHTML = hrs;
    }
    if (mins = 0) {
        cronom.innerHTML = "0" + mins;
    }
    else if(mins > 0){
        cronom.innerHTML =  mins;
    }
    cronos.innerHTML = sec;
    clearTimeout(t);
}
function reiniciar(){
    clearTimeout(t);
    cronoh.innerHTML = "00";
    cronom.innerHTML = "00";
    cronos.innerHTML = "00";
    sec = 0;
    mins = 0;
    hrs = 0;
}
//////////////////////////////////////////////         ALARMA        ////////////////////////////////////////////////////////
var popup = document.querySelector(".popup");
var cerrarpopup = document.querySelector(".cerrarpopup");
var fondo = document.querySelector("body");
var efectalarma;
///////////////////////         IDs DE HTML ALARMA     ///////////////////////
var ah = document.querySelector("#ah");
var am = document.querySelector("#am");
//////////////////////          INPUT FORMULARIO        ////////////////
var alarmah = document.querySelector("#alarmah");
var alarmam = document.querySelector("#alarmam");
ah.innerHTML = "00";
am.innerHTML = "00";
var popupsonido = document.querySelector(".popupsonido");
var sonido = document.querySelector("#musica");
function toggleCrear() {
    alarmah.value = "00";
    alarmam.value = "00";
    popup.classList.toggle("mostrar-ventana");
    alarmah.focus();
}
function windowOnClick(event) {
    if (event.target === popup) {
        toggleCrear();
    }
}
window.addEventListener("click", windowOnClick);
cerrarpopup.addEventListener("click", toggleCrear);
function guardar()
{
    if(alarmah.value > 23 || alarmam.value >59){
        alert("introduce una hora correcta")
    }
    else{
        if(alarmah.value.length == 2){
            ah.innerHTML = alarmah.value;
        }
        else if(alarmah.value.length == 1){
            ah.innerHTML = "0" + alarmah.value;
        }
        if(alarmam.value.length == 2){
            am.innerHTML = alarmam.value;
        }
        else if(alarmam.value.length == 1){
            am.innerHTML = "0" + alarmam.value;;
        }
        popup.classList.remove("mostrar-ventana");
        sonaralarma();
    } 
}
function cambiar(){
    alarmah.innerHTML = ah.innerHTML;
    alarmam.innerHTML = am.innerHTML;
    popup.classList.toggle("mostrar-ventana");
    alarmah.focus();
    sonaralarma();
}
var salarma = setInterval(sonaralarma, 1000);

function sonaralarma(){
    var orduaeguna = new Date();
    var hheu = orduaeguna.getHours();
    var mineu = orduaeguna.getMinutes();
    var segeu = orduaeguna.getSeconds();
    ///////////////////////////////////////////////////      HORA     //////////////////////////////////////////////
    horaal.innerHTML = hheu;
    if(mineu < 10){
        minutosal.innerHTML = "0" + mineu; 
    }
    else{
        minutosal.innerHTML = mineu;
    }
    if(segeu < 10){
        segundosal.innerHTML = "0" + segeu;
    }
    else{
        segundosal.innerHTML = segeu;
    }
    var dia = new Date();
    var hh = dia.getHours();
    var min = dia.getMinutes();

    if (ah.innerHTML == hh && am.innerHTML == min)
    {
        popupsonido.classList.toggle("mostrar-ventana");
        sonido.play(); 
    }
}
function pararalarma(){
    clearInterval(salarma);
    sonido.pause();
    sonido.currentTime = 0;
    popupsonido.style.display = "none";
    ah.innerHTML = "00";
    am.innerHTML = "00";
}