import React, {useContext} from 'react';
import Album from './Album';
import Bounce from 'react-reveal/Bounce';
import imagen from '../../img/album-1.png';
import {ModalContext} from '../../context/ModalContext';


        const Albumes = () => {


        const{Infoalbum} = useContext(ModalContext);

        return ( 


                <div className="row p-1">
                        <Bounce top>
                        <img className=" mb-5 img-title" src={imagen} alt="albums"/>
                        </Bounce>
                        <div className=" row">
                        {Infoalbum.map(info => (
                        <Album 
                                key={info.id}
                                info={info}
                        />   
                        ))}
                        </div>
                </div>
                

        );
        }
 
export default Albumes;