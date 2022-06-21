 //// FUNCTION CHE RICHIEDE I DATI DA UN DATABASE ESTERNO
const initApp = () => fetch('https://628778b1e9494df61b39b038.mockapi.io/recipes')
                      .then(responseCallBack)
                      .then(resultCallback)
                      .catch(catchError)

initApp();

//// FUNCTION CHE CERCA IL TERMINE INSERITO E RIMANDA ALLA PAGINA
function search() {
    const input = document.getElementById('search-input');
    console.log('parola cercata', input.value)
    const searchWords = input.value.trim().toLowerCase();
    const term = searchWords.replaceAll(' ', '-');
    const allTerm = [];
    for (const element of tempArray) {
      allTerm.push(element.index)
    }
    if (allTerm.includes(term)) {
      goToPage(term);
    } else {
      input.value = '';
    }
  }

  

  //// FUNCTION CHE REINDERIZZA ALLA PAGINA DELLA CARD SELEZIONATA


  //// FUNCTION CHE PRENDE I DATI IN ENTRATA E LI VISUALIZZA SULLO SCHERMO


  //// FUNCTION CHE CREA IL TEMPLATE HTML, DOVE ANDRANNO INSERITI I DATI




