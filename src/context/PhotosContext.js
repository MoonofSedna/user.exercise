import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {ModalContext} from '../context/ModalContext';


export const PhotosContext = createContext();

    const PhotosProvider = (props) => {

        const [getAlbumId, saveAlbumId]= useState('');
        const [photos, savePhotos] = useState({});
        const [carusel, showCarusel ] = useState(false);

        useEffect( () =>{
            
            const GetID = async () => {

                const url = `https://jsonplaceholder.typicode.com/photos?albumId=${getAlbumId}`;
                const result = await axios.get(url);
                
                savePhotos(result.data);
            }
            GetID();

        }, [getAlbumId]);

        const showPhotos = () => {
            showCarusel(true);
            Showalbums(false);
            Showposts(false);
            Showtodos(false);
        }

        const closeCarusel = () => {

            showCarusel(false);
            saveAlbumId(null);
            Showalbums(true);

        }

        const {Showalbums, Showposts, Showtodos} = useContext(ModalContext);


        return(

            <PhotosContext.Provider
            value={{
            getAlbumId,
            saveAlbumId,
            photos,
            savePhotos,
            showPhotos,
            carusel,
            showCarusel,
            closeCarusel
            }}>
            {props.children}
            </PhotosContext.Provider>

        );

    }

export default PhotosProvider;