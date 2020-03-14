import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const UsersContext = createContext();

    const UsersProvider = (props) => {


        //User State 

        const [users, saveUsers] = useState([]);
        const [getdata, saveData] = useState({
            name:'',
            username:'',
            email:'',
            phone:'',
            website:'',
            city:''
        });

        useEffect( () =>{

            const getUsers = async () => {
                const url = `https://jsonplaceholder.typicode.com/users`;
                const result = await axios.get(url);
                
                saveUsers(result.data);
            }

            getUsers();
        

        }, []);

        const submitUsers = e => {
            saveData({
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
                    saveData,
                    submitUsers
            }}>
                {props.children}
            </UsersContext.Provider>

        );

    }

export default UsersProvider;