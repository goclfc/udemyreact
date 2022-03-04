import React, {useState,useEffect}from 'react';
import {AppBar,Toolbar,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from '../sideDrawer/SideDrawer';
const Header = () => {
    const {drawerOpen,setDrawerOpen} = useState(false);
    const toggleDrawer = (value)=>{
        setDrawerOpen(value)
    }
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
                    onClick={()=>toggleDrawer(true)}
                >
                  <MenuIcon />
                  
                </IconButton>
            <SideDrawer 
            open = {drawerOpen}
            />
            </Toolbar>
        </AppBar>
    )
}
export default Header;