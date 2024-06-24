import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface HeaderProps {
    onTitleClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTitleClick }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" onClick={onTitleClick} style={{ cursor: 'pointer' }}>
                    Wyszukiwarka przepisów
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
