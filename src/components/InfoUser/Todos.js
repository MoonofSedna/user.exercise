import React, {useContext, useState} from 'react';
import Todo from './Todo';
import {ModalContext} from '../../context/ModalContext';
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

const Todos = () => {
     //Set modal

     const [modalStyle] = useState(getModalStyle);

    

      /// Modal config ///

      const classes= useStyles();

    
    const handleClose = () => {
        setOpen(false);

    }

   /////////////////////////

    const{Infotodos, SaveGetID, open, setOpen} = useContext(ModalContext);

    return ( 


        <Modal
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
            <h4>Lista de Todos</h4>
            {Infotodos.map(info => (
                    <Todo
                    key={info.id}
                    info={info}
            />
            ))}


            </div>

        </Modal>

     );
      
}
 
export default Todos;