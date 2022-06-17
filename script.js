const param = parsUrlParams()

const BASE_URL = 'https://628778b1e9494df61b39b038.mockapi.io/recipes' + param.id;

let array = [];


//// FUNCTION CHE CONTROLLA L'ID DELLA PAGINA
function parsUrlParams() {
    const urlSerchParams = new URLSearchParams(window.location.search)
    const param = Object.fromEntries(urlSerchParams)
    return param;
}

//// FUNCTION CHE PRENDE I DATI IN ENTRATA E LI VISUALIZZA SULLO SCHERMO
function objToArray(obj) {
    array = Object(obj);
    displayInfo(array)
}

//// FUNCTION CHE MANDA UNA RICHIESTA DI DATI ALL'API
function requestData() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(result => objToArray(result))
}


requestData();
