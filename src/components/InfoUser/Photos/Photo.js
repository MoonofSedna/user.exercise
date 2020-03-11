import React, {useContext} from 'react';

const Photo = ({photo}) => {

    const {title, url, id} = photo;

    return ( 

       
                <div className="carousel-item">
                    <h2>{title}</h2>
                    <img className="d-block w-100" src={url} alt={id}/>
                </div>

     );
}
 
export default Photo;