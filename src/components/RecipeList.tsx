import React from 'react';
import Grid from '@mui/material/Grid';
import RecipeCard from './RecipeCard';
import { Recipe } from '../api';

interface RecipeListProps {
    recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
    return (
        <Grid container spacing={3}>
            {recipes.map((recipe, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <RecipeCard recipe={recipe} />
                </Grid>
            ))}
        </Grid>
    );
};

export default RecipeList;
