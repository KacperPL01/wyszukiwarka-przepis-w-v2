import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Recipe } from '../api';

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {recipe.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Added by: {recipe.addedBy}
                </Typography>
                {recipe.source && typeof recipe.source !== 'string' && (
                    <Typography variant="body2" color="text.secondary">
                        Source: {recipe.source.sourceDisplayName}
                    </Typography>
                )}
            </CardContent>
            <img src={recipe.image} alt={recipe.label} style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
        </Card>
    );
};

export default RecipeCard;
