import React from 'react';
import {AppBar,Toolbar,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    return (
        <AppBar 
            position="fixed"
            style={{
                backgroundColor:"black",
                padding:"10px"
            }}
        >
            <Toolbar>
                <div style={{display:'block'}}>
                <div> Logo </div>
                <div> Some text </div>
                </div>
                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    style={{
                        marginLeft:'auto',
                    }}
                >
                  <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default Header;