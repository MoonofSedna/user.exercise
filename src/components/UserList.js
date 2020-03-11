import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import {UsersContext} from '../context/UsersContext';
import imagen from '../img/logo-1.png';
import Users from './Users';
import axios from 'axios';


const UserList = () => {

    const {users, saveUsers, getdata, GetData,  SubmitUsers} = useContext (UsersContext);

    const {name, username, email, phone, website, city} = getdata;

    const [open, setOpen] = useState(false);

    function AgregarUsuario (NewUser) {

        const NewUsers = [
            ...users,
            NewUser
        ]

        saveUsers(NewUsers);

    }

    const SubmitUser = async (e) => {

        e.preventDefault();

         //Validate

        if(name.trim() === '' || username.trim() === '' || email.trim() === '' || phone.trim() === '' || website.trim() === '' || city.trim() === ''){
            
            return;
        }

        //

        const response = await axios.post (`https://jsonplaceholder.typicode.com/users`, getdata);

        if (response.status === 200 || response.status === 201){

            AgregarUsuario(response.data);

        }

        GetData({
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
            <img src={imagen} alt="logo" className="img-logo d-block" />
            <div className="col-md-6 form-user">
            <button
                className="btn btn-info btn-form-user"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
               Add new user!
            </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <form onSubmit={SubmitUser} id="form">
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Control className="mb-1" name="name" value={name}  type="text" placeholder="Name" onChange={SubmitUsers}/>
                        <Form.Control className="mb-1" name="username" value={username}  type="text" placeholder="User Name" onChange={SubmitUsers} />
                        <Form.Control className="mb-1" name="email" value={email} type="text" placeholder="Email" onChange={SubmitUsers} />
                        <Form.Control className="mb-1" name="phone" value={phone} type="phone" placeholder="Phone" onChange={SubmitUsers}/>
                        <Form.Control className="mb-1" name="website" value={website}  type="text" placeholder="Website"onChange={SubmitUsers}/>
                        <Form.Control className="mb-1" name="city" value={city}  type="text" placeholder="City" onChange={SubmitUsers} />
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