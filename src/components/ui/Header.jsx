import { AppBar, Toolbar } from '@mui/material';
import React from 'react';

function Header(props) {
    return (
        <AppBar position='fixed'>
            <Toolbar>Arc Development</Toolbar>
        </AppBar>
    );
}

export default Header;