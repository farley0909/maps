// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
function initMap() {
    //Centraliza o mapa em cajazeiras
    const cajazeiras = { lat: -6.88634, lng: -38.5614 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: cajazeiras,
    });
    //fechaModal
    const btnCancelar = document.getElementById("cancelar");
    btnCancelar.addEventListener("click", fechaModal);
    map.addListener('click', async (event) => {
        let lat = event.latLng.lat();
        let long = event.latLng.lng();
        await exibirModal(lat, long, map);
    });
    // This event listener calls addMarker() when the map is clicked.
    // Add a marker at the center of the map.
}
function fechaModal() {
    let fade = document.getElementById("fade");
    let modal = document.getElementById("modal");
    fade.style.display = "none";
    modal.style.display = "none";
}
function exibirModal(lat, long, map) {
    console.log(lat, long);
    let fade = document.getElementById("fade");
    let modal = document.getElementById("modal");
    fade.style.display = "block";
    modal.style.display = "block";
    const btnAdicionar = document.getElementById("adicionar");
    btnAdicionar.addEventListener("click", async () => {
        let nomeHemonucle = document.getElementById("hemonucleoNome").value;
        let desc = document.getElementById("descricao").value;
        await salvaDados(nomeHemonucle, desc, lat, long);
        addMarker(lat, long, nomeHemonucle, desc, map);
        fechaModal();
    });
    //return {nomeHemonucle, desc}
}
async function salvaDados(nome, desc, lat, long) {
    let data = {
        nome: nome,
        desc: desc,
        lat: lat,
        long: long
    };
    console.log(data);
    let res = await fetch('http://localhost:8080/cadastro/', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    let req = await res.json();
}
// Adds a marker to the map.
function addMarker(lat, long, nome, desc, map) {
    console.log("Recebidos", nome);
    const p = new google.maps.Marker({
        position: { lat: lat, lng: long },
        map: map,
    });
    p.addListener('click', () => {
        console.log('cliqou', p.getPosition().lat());
    });
}
window.initMap = initMap;
