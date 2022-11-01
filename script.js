// class Recipes{
//     constructor(name, scope, facility, time, ingredients, preparation, id){
//         this.name = name;
//         this.scope = scope;
//         this.facility = facility;
//         this.time = time;
//         this.ingredients = ingredients;
//         this.preparation = preparation;
//         this.id = id;
//     }
// }

//// FUNCTION CHE RICHIEDE I DATI DA UN DATABASE ESTERNO
fetch('https://628778b1e9494df61b39b038.mockapi.io/recipes')
.then(resp => resp.json())
.then(res => displayRecipes(res));


// DISPLAY DEI PAESI NEL DIV CON ID CONTAINER NELL'HTML
function displayRecipes(recipes) {
    const container = document.getElementById('container');
    console.log(recipes);
  
    
    // CREO UNA CARD PER OGNI PAESE
        for (let recipe of recipes) {
            const card = document.createElement('div');
            card.classList.add('card');
    
            // NAME
            const name = document.createElement('p');
            name.classList.add('name');
            name.innerText = 'Nome : ' + recipe.name;
            card.appendChild(name);

            const img = document.createElement('img');
            img.classList.add('img');
            img.src = recipe.img;
            card.appendChild(img);
    
            // CAPITALE
            const scope = document.createElement('p');
            scope.classList.add('scope');
            scope.innerText = 'Portata : ' + recipe.scope;
            card.appendChild(scope);
    
            // BANDIERA
            const facility = document.createElement('p');
            facility.classList.add('facility');
            facility.innerText = 'Facilità : ' + recipe.facility;
            card.appendChild(facility);
    
            // CREO UN DIV CONTENENTE LE INFO
            const bottomCard = document.createElement('div');
            bottomCard.classList.add('bottom-card');
            card.appendChild(bottomCard);
  
            // REGIONE DEL CONTINENTE
            const ingredients = document.createElement('p');
            ingredients.classList.add('ingredients');
            ingredients.innerText = 'Ingredienti : ' + recipe.ingredients;
            bottomCard.appendChild(ingredients);
    
            // CONFINI
            const preparation = document.createElement('p');
            preparation.classList.add('preparation');
            preparation.innerText = 'Preparazione : ' + recipe.preparation;
            bottomCard.appendChild(preparation);

            const time = document.createElement('p');
            time.classList.add('time');
            time.innerText = 'Tempo : ' + recipe.time;
            bottomCard.appendChild(time);

    
            container.appendChild(card);
           
    
    }
 }
