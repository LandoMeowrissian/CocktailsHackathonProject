const backend = new CocktailsApi();

// query for api section and button
const apiSection = document.querySelector('.api__section');
const shakeButton = document.querySelector('.button');

displayCocktail(17206)

const cocktailChoices = [
    {
        liquorType: "Bourbon",
        cocktailID: "17206"
    },
    {
        liquorType: "Gin",
        cocktailID: "11410",
    },
    {
        liquorType: "Rum",
        cocktailID: "12097",
    },
    {
        liquorType: "Scotch",
        cocktailID: "11658",
    },
    {
        liquorType: "Tequila",
        cocktailID: "11007",
    },
    {
        liquorType: "Vodka",
        cocktailID: "14071"
    },
    {
        liquorType: "Whiskey",
        cocktailID: "13200",
    },
];


shakeButton.addEventListener("click", async (e) => {
    
    e.preventDefault()
    const formSelector = document.querySelector(".form__selector")
    const selectedLiquor = formSelector.value

    const search = await backend.searchLiquor(selectedLiquor)
    let id = ""
    cocktailChoices.forEach((cocktailChoice) => {
        if (cocktailChoice.liquorType === selectedLiquor) {
            id = cocktailChoice.cocktailID
        }
  
    })
    console.log(id)
    displayCocktail(id)
})

function updateIngredients(ourObject) {
    const apiImg = document.querySelector(".api__img")
    const cocktailName = document.querySelector(".cocktail__name")
    const ingredientsList = document.querySelector('.ingredients__list');
    const cocktailInstructions = document.querySelector(".cocktail__instructions")

    
    cocktailInstructions.innerText = "";

    apiImg.src = ourObject.strDrinkThumb
    cocktailName.innerText = ourObject.strDrink
    cocktailInstructions.innerText = ourObject.strInstructions

    const listItems1 = document.querySelector('.ingredients__item1');
    const listItems2 = document.querySelector('.ingredients__item2');
    const listItems3 = document.querySelector('.ingredients__item3');
    const listItems4 = document.querySelector('.ingredients__item4');

    listItems1.innerText = ourObject.strIngredient1;
    listItems2.innerText = ourObject.strIngredient2;
    listItems3.innerText = ourObject.strIngredient3;
    listItems4.innerText = ourObject.strIngredient4;
  }

 

  async function displayCocktail(id) {
    try {
        const cocktail = await backend.getCocktailsRecipe(id)
        updateIngredients(cocktail)
        
    } catch(err) {
        console.error(err)
    }
  }



