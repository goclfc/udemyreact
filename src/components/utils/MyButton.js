import React from 'react'
import { Button } from "@mui/material";
import icon_ticket from '../../resources/images/icons/ticket.png'
const MyButton =(props)=>{
    return(
       <Button 
       href={props.link}
       size = {props.size ? props.size:'large'}
       style={{
           background:'#8e8e8e',
           color:'#ffffff',
           ...props.style
       }}
       >
           {props.iconTicket ?
           <img 
                src={icon_ticket} 
                className='iconImage'
                alt='purchase_icon'
           />
           :null

           }
            {props.text}
           
           
       </Button>
    )
}
export default MyButton