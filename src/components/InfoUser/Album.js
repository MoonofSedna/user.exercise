import React, {useContext} from 'react';
import imagen from '../../img/icon-album.png';
import {PhotosContext} from '../../context/PhotosContext';

        const Album = ({info}) => {

                const {saveAlbumId, showPhotos} = useContext(PhotosContext);

                const {title} = info;

                return ( 
                        
                        <div className=" col-md-6 mt-2 mb-5 text-center">
                                <img src={imagen} className="mb-3 img-icon" alt="album"/>
                                <a href="#!" className="album-a"  onClick={() => {
                                saveAlbumId(info.id);
                                        showPhotos();
                                }}>{title}</a>
                        </div> 
                


                );
        }
 
export default Album;