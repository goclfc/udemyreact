import React,{useState,useEffect}from 'react'
import MyButton from '../utils/MyButton'
import { Zoom } from 'react-awesome-reveal'

const Pricing =()=>{
    const priceState = {
        price:[100,150,200],
        position:['Balcony','Lounge','Vip Gold'],
        desc:[
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make' ,'a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially u'
        ],
        linkto:['http://sales.a','http://sales.b','http://sales.c'],
        delay:[500,0,500]
    }
    const showBoxes = ()=>(
        priceState.price.map((item,index)=>(
            <Zoom 
                key = {index}
                className='pricing_item'
                delay={priceState.delay[index]}
            >
                <div className='pricing_inner_wrapper'>
                   <div className='pricing_title'>
                       <span> {priceState.price[index]} </span>
                       <span> {priceState.position[index]} </span>
                    </div>
                    <div className='pricing_description'>
                        {priceState.desc[index]}
                    </div>
                    <div className='pricing_buttons'>
                        <MyButton text='Purchase' size='small' iconTicket='true' link={priceState.linkto[index]}/>
                    </div>
                </div>

            </Zoom>
        ))
    )
    return (
        <div className='bck_black'>
            <div className='center_wrapper pricing_section'>
                <h2> Pricing </h2>
                <div className='pricing_wrapper'>
                    { showBoxes() }
                </div>
            </div>
        </div>
    )
}
export default Pricing