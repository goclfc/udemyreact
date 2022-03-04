import React, {useState,useEffect}from 'react';
import Drawer from '@mui/material/Drawer';
const SideDrawer=(props)=>{
    return(
        
        <Drawer
        anchor='right'
        open={props.open}
        >
            <h1>hello</h1>
            <button onClick={()=>alert("hello")}> Click</button>
        </Drawer>
    )
}
export default SideDrawer;