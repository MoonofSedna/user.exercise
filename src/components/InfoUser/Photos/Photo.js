import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

    const Photo = ({photo}) => {

        const {title, url, id} = photo;

        return ( 

            <div>
                <img className="d-block w-100" src={url} alt={id}/>
                <Carousel.Caption>
                    <h3>{title}</h3>
                </Carousel.Caption>
            </div>
        );
    }
 
export default Photo;