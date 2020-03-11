import React, {useContext, useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Albumes from './InfoUser/Albumes';
import Posts from './InfoUser/Posts';
import Todos from './InfoUser/Todos';
import {ModalContext} from '../context/ModalContext';
import imagen from'../img/user.png';
import {PhotosContext} from '../context/PhotosContext';



const Users = ({user}) => {

     const [showalbums, Showalbums] = useState(false);
     const [showposts, Showposts] = useState(false);
     const [showtodos, Showtodos] = useState(false);
       


    //Obtener informacion

    const getAlbums = () => {

        Showalbums(true);
        Showposts(false);
        Showtodos(false);
        handleOpen();

    }

    const getPosts = () => {

        Showposts(true);
        Showalbums(false);
        Showtodos(false);
        handleOpen();
    
    }

    const getTodos = () => {

        Showtodos(true);
        Showalbums(false);
        Showposts(false);
        handleOpen();
    
    }

    const handleOpen = () => {
        setOpen(true);
    }
    const mostrarcollapse = () => {
            
                SaveGetID(user.id);
            
        }

    const {SaveGetID, setOpen} = useContext(ModalContext);
    // const {photos, Carusel} = useContext(PhotosContext);

    const {name, username, email, phone, website} = user;



    return (

        <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
           
                <div className="card text-center pt-4 pl-4 pr-4">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={imagen} alt="iconUser" className="card-img-top"/>
                        <DropdownButton variant="outline-info"  className="user-btn mt-2"  title="Show Activity" onClick={() => {mostrarcollapse();}}>
                                <div className="card-menu">
                                    <button className="btn btn-act btn-block m-auto" onClick={() => {getPosts();}}>Posts</button>
                                    <button className="btn btn-act btn-block m-auto" onClick={() => {getTodos();}}>To do</button>
                                    <button className="btn btn-act btn-block m-auto" onClick={() => {getAlbums();}}>Photo Gallery</button>
                                </div>
                        </DropdownButton> 
                        
                    </div>
                    <div className="col-md-8 pl-2">
                        <div className="card-body text-left row">

                            <div className="col-md-6">
                            <p>User:<span> {name}</span></p>
                            <p>UserName: <span>{username} </span></p>
                            <p>Email: <span>{email}</span> </p>
                            
                            </div>
                            <div className="col-md-6">
                            <p>Phone: <span>{phone} </span></p>
                            <p>Website: <span>{website}</span></p>
                            </div>
                          
                          </div>  
                       
                    </div>
                        
                     
                        
                        {showalbums
                        ?(
                            <Albumes/>
                        )
                        : null}
                        {showposts
                        ?(
                            <Posts/>
                        )
                        : null}
                        {showtodos
                        ?(
                            <Todos/>
                        )
                        : null}
                        

                </div>
            </div>
        </div>


    );
}


export default Users;