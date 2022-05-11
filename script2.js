window.onload = iniciar;
function iniciar() {

    let boton = document.getElementById("btnCargar");
    boton.addEventListener('click', clickboton);
}

async function cargarUrl(url) {
    let respuesta = await fetch(url);
    return respuesta.json();
}

async function clickboton() {


    let pais = document.getElementById("selectPais").value;
    let fecha = document.getElementById("inputFecha").value;

    let url= `https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`;
    let json = await cargarUrl(url);
    console.log(json);

    let estadisticas = json.dates[fecha].countries[pais];
    console.log(estadisticas);

    document.getElementById('today_confirmed').innerHTML = estadisticas.today_confirmed;
    document.getElementById('today_deaths').innerHTML = estadisticas.today_deaths;
    document.getElementById('today_new_confirmed').innerHTML = estadisticas.today_new_confirmed;
    document.getElementById('today_new_deaths').innerHTML = estadisticas.today_new_deaths;
    document.getElementById('today_new_open_cases').innerHTML = estadisticas.today_new_open_cases;
    document.getElementById('today_new_recovered').innerHTML = estadisticas.today_new_recovered;
    document.getElementById('today_open_cases').innerHTML = estadisticas.today_open_cases;
    document.getElementById('today_recovered').innerHTML = estadisticas.today_recovered;
    document.getElementById('yesterday_confirmed').innerHTML = estadisticas.yesterday_confirmed;
    document.getElementById('yesterday_deaths').innerHTML = estadisticas.yesterday_deaths;
    document.getElementById('yesterday_open_cases').innerHTML = estadisticas.yesterday_open_cases;
    document.getElementById('yesterday_recovered').innerHTML = estadisticas.yesterday_recovered;


    /*today_confirmed
    today_deaths
    today_new_confirmed
    today_new_deaths
    today_new_open_cases
    today_new_recovered
    today_open_cases
    today_recovered
    yesterday_confirmed
    yesterday_deaths
    yesterday_open_cases
    yesterday_recovered*/



}


