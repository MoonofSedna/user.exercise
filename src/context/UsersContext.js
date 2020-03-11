import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const UsersContext = createContext();

const UsersProvider = (props) => {


    //State User

    const [users, saveUsers] = useState([]);
    const [getdata, GetData] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:'',
        city:''
    });

    useEffect( () =>{

        const GetTodo = async () => {
            const url = `https://jsonplaceholder.typicode.com/users`;
            const result = await axios.get(url);
            
            saveUsers(result.data);
            
            
        }

        GetTodo();
       

    }, []);


    const SubmitUsers = e => {
        GetData({
            ...getdata,
            [e.target.name] : e.target.value
        })
    }
    
   
    

    return(

        <UsersContext.Provider
        value={{
            users,
            saveUsers,
            getdata,
            GetData,
            SubmitUsers,
         
        }}>
        {props.children}
    </UsersContext.Provider>

    );






}

export default UsersProvider;