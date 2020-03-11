import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const PhotosContext = createContext();

const PhotosProvider = (props) => {

    const [getAlbumId, saveAlbumId]= useState('');
    const [photos, savePhotos] = useState({});
    const [Carusel, showCarusel ] = useState(false);

    useEffect( () =>{

        
        const GetID = async () => {
            const url = `https://jsonplaceholder.typicode.com/photos?albumId=${getAlbumId}`;
            const result = await axios.get(url);
            
            savePhotos(result.data);
        }
        GetID();

    }, [getAlbumId]);

        //Obtener fotos
    const showPhotos = () => {
        showCarusel(true);
    }


    return(

        <PhotosContext.Provider
        value={{
           getAlbumId,
           saveAlbumId,
           photos,
           savePhotos,
           showPhotos,
           Carusel
        }}>
        {props.children}
        </PhotosContext.Provider>

    );

}

export default PhotosProvider;