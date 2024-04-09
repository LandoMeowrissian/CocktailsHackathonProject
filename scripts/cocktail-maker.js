class CocktailsApi {
    constructor(cocktailID){
        this.baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
    }

    async getCocktailsRecipe(id) {
        const url = `${this.baseUrl}lookup.php?i=${id}`;
        const response = await axios.get(url);
        const dataResponse = response.data.drinks[0]

        return dataResponse
    }

    async searchLiquor(liquorName) {
        const url = `${this.baseUrl}filter.php?i=${liquorName}`;
        const response = await axios.get(url);
        const dataResponse = response.data.drinks;

        return dataResponse
    }
};