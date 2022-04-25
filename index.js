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


        let { div, thumbnail, drink, category, instructions, readButton } = declareVar();

        div.classList = "drinkContainer"
        drinkContainer.appendChild(div)
        thumbnail.src = e.strDrinkThumb
        thumbnail.classList = "thumbnail-image"
        div.appendChild(thumbnail)
        drink.innerText = e.strDrink
        div.appendChild(drink)
        category.innerText = e.strCategory
        div.appendChild(category)

        instructions.innerText = e.strInstructions
        instructions.style.display = "none"
        div.appendChild(instructions)
        readButton.innerHTML = "Read more"
        readButton.classList = "readButton"
        readButton.onclick = readMore // read more func
    

        drinkIngr.forEach((e, i) => {
            if (e !== null) {
                let drinkIngredients = document.createElement('li')

                drinkIngredients.innerText = (drinkMeas[i] != null) ? drinkMeas[i] + " " + e: " " + e
                drinkIngredients.classList = "drinkIngredients"
                drinkIngredients.style.display = "none"
                div.appendChild(drinkIngredients)
                 readButton.addEventListener('click', () => {
                    drinkIngredients.style.display === "none" ?
                        drinkIngredients.style.display = "inline" : drinkIngredients.style.display = "none" 
               
                }) 
            }
        })


        div.appendChild(readButton)
        function readMore() {
            
            
            if (instructions.style.display === "none") {
                instructions.style.display = "inline"
         //       drinkIngredients.style.display = "inline"
                readButton.innerText = "Read less"
            } else {
                instructions.style.display = "none"
          //      drinkIngredients.style.display = "none"
                readButton.innerText = "Read more"
            }

        }
    })

    function declareVar() {
        let div = document.createElement('div')
        let thumbnail = document.createElement('img')
        let drink = document.createElement('h3')
        let category = document.createElement('h4')
        let instructions = document.createElement('p')
        let readButton = document.createElement('button')

        return { div, thumbnail, drink, category, instructions, readButton };
    }



}