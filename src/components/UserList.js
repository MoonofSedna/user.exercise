import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Bounce from 'react-reveal/Bounce';
import {UsersContext} from '../context/UsersContext';
import Error from './Error';
import imagen from '../img/users-1.png';
import Users from './Users';
import axios from 'axios';


    const UserList = () => {

        const {users, saveUsers, getdata, saveData, submitUsers} = useContext (UsersContext);

        const {name, username, email, phone, website, city} = getdata;

        const [open, setOpen] = useState(false);
        const [error, getError] = useState(false);

        function addUser (NewUser) {

            const NewUsers = [ 
                NewUser,
                ...users
            ]

            saveUsers(NewUsers);

        }

        const submitUser = async (e) => {

            e.preventDefault();

            //Validate

            if(name.trim() === '' || username.trim() === '' || email.trim() === '' || phone.trim() === '' || website.trim() === '' || city.trim() === ''){
                
                getError(true);
                return;
            }

            getError(false);

            //Call Api

            const response = await axios.post (`https://jsonplaceholder.typicode.com/users`, getdata);

            if (response.status === 200 || response.status === 201){

                addUser(response.data);

            }

            saveData({
                name:'',
                username:'',
                email:'',
                phone:'',
                website:'',
                city:''
            });

            setOpen(false);

        }

        return ( 
            

            <div className="row m-auto" >

                <div className=" mb-5 col-md-12">
                    <Bounce top>
                        <img src={imagen} alt="logo" className="img-logo" />
                    </Bounce>
                    <div className="col-md-6 offset-md-6">
                        {error ? <Error message = "All fields are required" /> :null}
                        <button
                            className="btn btn-info btn-form-user display-block"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            Add new user!
                        </button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <form onSubmit={submitUser} id="form">
                                <Form.Group  controlId="formBasicEmail">
                                    <Form.Control className="mb-1 input-1" name="name" value={name}  type="text" placeholder="Name" onChange={submitUsers}/>
                                    <Form.Control className="mb-1 input-1" name="username" value={username}  type="text" placeholder="User Name" onChange={submitUsers} />
                                    <Form.Control className="mb-1 input-1" name="email" value={email} type="text" placeholder="Email" onChange={submitUsers} />
                                    <Form.Control className="mb-1 input-1" name="phone" value={phone} type="phone" placeholder="Phone" onChange={submitUsers}/>
                                    <Form.Control className="mb-1 input-1" name="website" value={website}  type="text" placeholder="Website"onChange={submitUsers}/>
                                    <Form.Control className="mb-1 input-1" name="city" value={city}  type="text" placeholder="City" onChange={submitUsers} />
                                    <button type="submit" className="btn btn-info btn-block">Add</button>
                                </Form.Group>
                            </form>
                        </div>
                    </Collapse>
                    </div>
                </div>
                
                {users.map(user => (
                        <Users
                        key={user.id}
                        user={user}/>
                ))}
                

            </div>
        
        );
    }
 
export default UserList;