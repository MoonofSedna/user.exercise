import React, {useContext, useState} from 'react';
import Photo from './Photo';
import Carousel from 'react-bootstrap/Carousel';
import {PhotosContext} from '../../../context/PhotosContext';



    const Photos = () => {

        const{photos, closeCarusel} = useContext(PhotosContext);

            const [index, setIndex] = useState(0);
            const [direction, setDirection] = useState(null);

            const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
            setDirection(e.direction);
            };
        

        return ( 
                <div>
                    <div>
                        <button type="button" className="btn btn-info" onClick={closeCarusel}>&times;</button>
                    </div>
                    <Carousel className="carusel" activeIndex={index} direction={direction} onSelect={handleSelect}>
                        {photos.map(photo => (
                            <Carousel.Item key={photo.id}>
                                <Photo
                                key={photo.id}
                                photo={photo}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

        );
    }
 
export default Photos;