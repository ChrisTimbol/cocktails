// search cocktail by name
//  randomize a drink
// search by ingredient
// filter by alochol
const randomButton = document.getElementById('randomButton').addEventListener("click", () => {
    randomize()
})
const inputText = document.getElementById('inputText')
const searchButton = document.getElementById('searchButton').addEventListener("click", () => {
    searchDrink()
})

const drinkContainer = document.getElementById('mainDrinkContainer')


function searchDrink() { // search by title
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText.value}`) // fetchs json
        .then(res => res.json())  //res.json takes a json and parses it to produce a javascript object
        .then(json => showResults(json))
        .catch(err => console.log("Search Failed: " + err))
    drinkContainer.innerHTML = ""; // reset drink container
}

function randomize() { // fetchs a random drink and details
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php') // fetchs json
        .then(res => res.json())  //res.json takes a json and parses it to produce a javascript object
        .then(json => showResults(json)) // gets the res.json and outputs it
        .catch(err => console.log("Random Search Failed: " + err))
    drinkContainer.innerHTML = "";  // reset drink container
}

function showResults(result) {

    const drinkNames = result.drinks;
    console.log(drinkNames)

    drinkNames.forEach((e) => {

        const drinkIngr = [e.strIngredient1, e.strIngredient2, e.strIngredient3,
        e.strIngredient4, e.strIngredient5, e.strIngredient6, e.strIngredient7,
        e.strIngredient8, e.strIngredient9, e.strIngredient10, e.strIngredient11,
        e.strIngredient12, e.strIngredient13, e.strIngredient14, e.strIngredient15]
        const drinkMeas = [e.strMeasure1, e.strMeasure2, e.strMeasure3,
        e.strMeasure4, e.strMeasure5, e.strMeasure6, e.strMeasure7, e.strMeasure8,
        e.strMeasure9, e.strMeasure10, e.strMeasure11, e.strMeasure12, e.strMeasure13,
        e.strMeasure14, e.strMeasure15]
        let { div, thumbnail, drink, instructions } = declareVar();

        div.classList = "drinkContainer"
        drinkContainer.appendChild(div)
        thumbnail.src = e.strDrinkThumb
        thumbnail.classList = "thumbnail-image"
        div.appendChild(thumbnail)
        drink.innerText = e.strDrink
        div.appendChild(drink)
        instructions.innerText = e.strInstructions
        div.appendChild(instructions)

        drinkIngr.forEach((e, i) => {
            if (e !== null) {
                let drinkIngredients = document.createElement('li')

                drinkIngredients.innerText = (drinkMeas[i] != null) ? drinkMeas[i] + " " + e: " " + e
                div.appendChild(drinkIngredients)
            }
        })
    })

    function declareVar() {
        let div = document.createElement('div')
        let thumbnail = document.createElement('img')
        let drink = document.createElement('h3')
        let instructions = document.createElement('p')
        return { div, thumbnail, drink, instructions };
    }


}