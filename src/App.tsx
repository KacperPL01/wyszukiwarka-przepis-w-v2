import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { fetchRecipes, Recipe } from './api';

const App: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchInitialRecipes();
    }, []);

    const fetchInitialRecipes = async () => {
        setLoading(true);
        try {
            const queries = ['chicken', 'beef', 'pasta', 'salad', 'soup'];

            // Losowy wybór jednego przepisu z każdej kategorii
            const fetchedRecipes: Recipe[] = await Promise.all(
                queries.map(async (query) => {
                    const result = await fetchRecipes(query);
                    const randomIndex = Math.floor(Math.random() * result.length);
                    return result[randomIndex];
                })
            );

            setRecipes(fetchedRecipes);
        } catch (error) {
            console.error('Error fetching initial recipes:', error);
            setRecipes([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (query: string) => {
        setLoading(true);
        try {
            const searchedRecipes = await fetchRecipes(query);
            setRecipes(searchedRecipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setRecipes([]);
        } finally {
            setLoading(false);
        }
    };

    const handleTitleClick = () => {
        fetchInitialRecipes();
    };

    return (
        <>
            <Header onTitleClick={handleTitleClick} />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar onSearch={handleSearch} />
                    </Grid>
                    <Grid item xs={12}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : recipes.length > 0 ? (
                            <RecipeList recipes={recipes} />
                        ) : (
                            <p>No recipes found.</p>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default App;
