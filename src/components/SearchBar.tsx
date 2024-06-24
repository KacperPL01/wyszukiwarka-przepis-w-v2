import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim() !== '') {
            onSearch(query);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" padding={2} width="100%">
            <TextField
                label="Wyszukaj przepis"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ marginRight: '10px', flexGrow: 1 }}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Szukaj
            </Button>
        </Box>
    );
};

export default SearchBar;
