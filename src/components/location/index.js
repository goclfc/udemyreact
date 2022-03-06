import React from 'react';

const Location = () =>{
    return (
        <div className='location_wrapper'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5970.43783269884!2d44.978422147208896!3d41.564506429553056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ska!2sge!4v1646555725782!5m2!1ska!2sge" 
            width="100%" 
            height="500px" 
            frameBorder= '0'
            allowFullScreen
            title='gglemaps'
            >
            </iframe>
            <div className='location_tag'> <div>Location </div></div>
        </div>
    )
}
export default Location