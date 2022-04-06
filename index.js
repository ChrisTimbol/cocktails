// search cocktail by name
//  randomize a drink
// search by ingredient
// filter by alochol
const randomButton = document.getElementById('randomButton').addEventListener("click", () => {
    randomize()
})



function randomize() { // fetchs a random drink and details
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php') // fetchs json
        .then(res => res.json())  //res.json takes a json and parses it to produce a javascript object
        .then(json => showRandom(json.drinks[0])) // gets the res.json and outputs it
        .catch(err => console.log("Request Failed: " + err))


}

function showRandom(result) {

    console.log(result)
    let drinkName = result.strDrink
    let drinkCategory = result.strCategory
    let drinkImage = result.DrinkThumb;
    let drinkIngredients = [result.strIngredient1, result.strIngredient2, result.strIngredient3,
    result.strIngredient4, result.strIngredient5, result.strIngredient6, result.strIngredient7,
    result.strIngredient8, result.strIngredient9, result.strIngredient10, result.strIngredient11,
    result.strIngredient12, result.strIngredient13, result.strIngredient14, result.strIngredient15]
    let drinkMeasurements = [result.strMeasure1, result.strMeasure2, result.strMeasure3,
    result.strMeasure4, result.strMeasure5, result.strMeasure6, result.strMeasure7,
    result.strMeasure8, result.strMeasure9, result.strMeasure10, result.strMeasure11,
    result.strMeasure12, result.strMeasure13, result.strMeasure14, result.strMeasure15]
    drinkIngredients.forEach(element => {
        if (element != null) {
            console.log(element)
        }
    });
    drinkMeasurements.forEach(element => {
        if (element != null) {
            console.log(element)
        }
    });
    console.log("Drink Name: " + drinkName);
    console.log("Drink Type: " + drinkCategory);
    console.log("Drink Image: " + drinkImage);
}