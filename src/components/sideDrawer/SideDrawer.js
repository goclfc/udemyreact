import React, {useState,useEffect}from 'react';
import Drawer from '@mui/material/Drawer';
import { List,ListItem } from '@mui/material';
const SideDrawer=(props)=>{
    const lists =[
        {where:'Featured' , value:'To Top'},
        {where:'venue info' , value:'venue NFO'},
        {where:'highlights' , value:'highlights'},
        {where:'pricing' , value:'pricing'},
        {where:'location' , value:'location'}
        
    ]
    const renderList= (item) => (
        <ListItem button onClick={()=> alert(item.where)} key={item.where}>
            {item.value}
        </ListItem>
    )
    return(
        <Drawer
        anchor='right'
        open={props.open}
        onClose = {()=> props.onClose(false)}
        >
            <List component='nav'>
                {lists.map((item) =>(renderList(item)))}
            </List>
            
        </Drawer>
    )
}
export default SideDrawer;