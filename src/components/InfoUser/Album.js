import React, {useContext} from 'react';
import {PhotosContext} from '../../context/PhotosContext';

const Album = ({info}) => {

    const {saveAlbumId, showPhotos} = useContext(PhotosContext);

    const {title} = info;

    return ( 
        
            <div className=" col-md-6 mt-2">
                        <a href="#!" className=" mb-2"  onClick={() => {
                                saveAlbumId(info.id);
                                showPhotos();
                            }}>{title}</a>
                    </div> 
 


     );
}
 
export default Album;