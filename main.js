var btn = document.querySelector("button");
function cargarCiudad(){
    var ciudad = document.querySelector("input").value;
    var img = document.querySelector("img");
    var spanCiudad = document.getElementById("ciudad");
    var spanTemp = document.getElementById("temperatura");
    var celcius = "<sup>°C</sup>";
    var json = $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&lang=es&units=metric", function(data) {
        console.log(data)
        var icono = data.weather[0].icon;
        spanCiudad.textContent = data.name;
        spanTemp.innerHTML = data.main.temp + celcius;
        img.src = "http://openweathermap.org/img/w/" +  icono + ".png";
        document.querySelector(".container").style.visibility = "visible";
        document.querySelector("input").value = "";
    })
}
function presionarEnter(){
    var teclaEnter = event.keyCode;
    if(teclaEnter == 13){
        cargarCiudad()
    }
}
    
function soloLetras(e) {
    var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    if (letras.indexOf(tecla) == -1) {
        return false;
    }
}
btn.addEventListener("click", cargarCiudad);
window.onkeydown = presionarEnter;