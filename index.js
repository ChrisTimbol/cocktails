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
    function declareVar() {
        let div = document.createElement('div')
        let thumbnail = document.createElement('img')
        let drink = document.createElement('h3')
        let instructions = document.createElement('p')
        return { div, thumbnail, drink, instructions };
    }


    drinkNames.forEach(e => {
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
    })

}