import React, {useContext} from 'react';
import Photo from './Photo';
import {PhotosContext} from '../../../context/PhotosContext';



const Photos = () => {

    const{photos} = useContext(PhotosContext);

    return ( 
            <div>
            {photos.map(photo => (
                    <Photo
                    key={photo.id}
                    photo={photo}
                    />
            ))}
            </div>
           
     );
}
 
export default Photos;