import React, {useContext, useState} from 'react';
import Albumes from './InfoUser/Albumes';
import Posts from './InfoUser/Posts';
import Todos from './InfoUser/Todos';
import Photos from './InfoUser/Photos/Photos';
import Zoom from 'react-reveal/Zoom';
import {ModalContext} from '../context/ModalContext';
import imagen from'../img/user.png';
import {PhotosContext} from '../context/PhotosContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';


    function getModalStyle() {
        const top = 50 ;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }
    const useStyles = makeStyles(theme => ({

        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));



    const Users = ({user}) => {

        
        const [modalopen, modalOpen] = useState(false);
        
        //Set modal

        const [modalStyle] = useState(getModalStyle);


        /// Modal config ///

        const classes= useStyles();



        //Obtener informacion

        const getAlbums = () => {

            
            Showalbums(true);
            Showposts(false);
            Showtodos(false);
            showCarusel(false);
            ShowModal();

        }

        const getPosts = () => {

            Showposts(true);
            Showalbums(false);
            Showtodos(false);
            showCarusel(false);
            ShowModal();
        
        }

        const getTodos = () => {

            Showtodos(true);
            Showalbums(false);
            Showposts(false);
            showCarusel(false);
            ShowModal();
        
        }


        const ShowModal = () => {

            modalOpen(true);
            setOpen(true);

        }


        const handleClose = () => {
            setOpen(false);

        }

    

        const {SaveGetID, open, setOpen, showalbums, Showalbums, showposts, Showposts, showtodos, Showtodos,} = useContext(ModalContext);
        const {carusel, showCarusel} = useContext(PhotosContext);

        const {name, username, email, phone, website} = user;



        return (

            <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
            
                <div className="card text-center pt-4 pl-4 pr-4">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={imagen} alt="iconUser" className="card-img-top"/>
                            <div className="btn-group">
                                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => {SaveGetID(user.id);}}>
                                    Show Activity
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <button className="btn btn-act btn-block m-auto" onClick={() => {getPosts();}}>Posts</button>
                                    <button className="btn btn-act btn-block m-auto" onClick={() => {getTodos();}}>To do</button>
                                    <button className="btn btn-act btn-block m-auto" onClick={() => {getAlbums();}}>Photo Gallery</button>
                                </div>
                            </div>
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

                        {modalopen
                        
                        ? ( <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open}
                                key ={SaveGetID}
                                onClose={() => {
                                    SaveGetID(null);
                                    handleClose();
                                }}
                                        
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                        timeout: 500
                            }}>
                                <div style={modalStyle} className={`Modals ${classes.paper}`} >
                        
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

                                    {carusel
                                    ?(
                                        <Photos/>
                                    )
                                    : null}

                                </div>

                        </Modal> 
                        )
                        :null}
                    </div>
                </div>
            </div>
        );
    }


    export default Users;