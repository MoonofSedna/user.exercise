import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const ModalContext = createContext();

    const ModalProvider = (props) => {

        const [getid, SaveGetID] = useState({});
        const [getAlbumId, SaveAlbumId] =useState('');
        const [Infoalbum, saveInfoalbum] = useState({});
        const [Infotodos, saveInfotodos] = useState({});
        const [Infopost, saveInfopost] = useState({});
        const [ open, setOpen] = useState(false);

    
        useEffect(() => {
            
            if(getid === '') return;

            const getItems = async () => {
            

            const url = `https://jsonplaceholder.typicode.com/albums?userId=${getid}`;
            const url2 = `https://jsonplaceholder.typicode.com/todos?userId=${getid}`;
            const url3= `https://jsonplaceholder.typicode.com/posts?userId=${getid}`;

            const [Infoalbum, Infotodos, Infopost] = await Promise.all([
            axios(url),
            axios(url2),
            axios(url3)
            ]);

          saveInfoalbum(Infoalbum.data);
          saveInfotodos(Infotodos.data);
          saveInfopost(Infopost.data);
       
      }

      getItems();
        }, [getid]);

    

    return(

        <ModalContext.Provider
        value={{
            getid,
            SaveGetID,
            getAlbumId,
            SaveAlbumId,
            Infoalbum,
            saveInfoalbum,
            Infotodos,
            Infopost,
            open,
            setOpen
        }}>
        {props.children}
        </ModalContext.Provider>

    );

    }

    export default ModalProvider;