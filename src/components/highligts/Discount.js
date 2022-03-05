import React ,{useState,useEffect} from "react";
import {Fade,Slide} from 'react-awesome-reveal'
     

const Discount = () => {
    const end = 30
    const [start,setStart] = useState(0)
    const porcentage = ()=> {
        if (start < end){
                setStart(prevCount => prevCount +1)
            }
        }
    useEffect(()=>{
        if (start > 0 && start < 30){
            setTimeout(()=>{
                setStart(prevCount => prevCount +1)
            },30)
        }
                
        
    },[start])
    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={(inView) =>{
                        if(inView){
                            porcentage()
                        }
                    }}
                >
                    <div className="discount_porcentage ">
                        <span> {start}%</span>
                        <span> OFF</span>
                    </div>

                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3> Purchase Description </h3>
                        <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
                        </p>
                    </div>
                </Slide>
            </div>
            
        </div>
    )
}
export default Discount