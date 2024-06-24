import axios from 'axios';

const API_ID = '3af94f14';
const API_KEY = '4c87787cdfd29c621579f68e47b10001';
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

export interface Recipe {
    label: string;
    image: string;
    source: {
        sourceDisplayName: string;
        sourceSiteUrl: string;
    };
    addedBy: string; // Dodane pole `addedBy`
    url: string;
}

export const fetchRecipes = async (query: string): Promise<Recipe[]> => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: query,
                app_id: API_ID,
                app_key: API_KEY,
                type: 'public'
            }
        });

        console.log('Recipes fetched:', response.data.hits); // Sprawdź, czy są otrzymane przepisy

        return response.data.hits.map((hit: { recipe: Recipe }) => hit.recipe);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return []; // Obsługa błędu, zwróć pustą tablicę w przypadku problemu
    }
};
