import React, {useContext, useState} from 'react';
import Post from './Post';
import Error from '../Error';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Bounce from 'react-reveal/Bounce';
import imagen from '../../img/posts-1.png';
import {ModalContext} from '../../context/ModalContext';
import axios from 'axios';

    const Posts = () => {
    

        const{Infopost, saveInfopost} = useContext(ModalContext);

        const [open, setOpen] = useState(false);
        const [error, getError] = useState(false);
        const [getdatapost, getDataPost] = useState({
            title:'',
            body:''
        });

        const {title, body }= getdatapost;

        const SubmitPosts = e => {
            getDataPost({
                ...getdatapost,
                [e.target.name] : e.target.value
            })
        }


        const AddPost = (NewPost) => {

            const NewPosts = [
                NewPost,
                ...Infopost
            ];
            saveInfopost(NewPosts);
        }


        const SubmitPost = async (e) => {

            e.preventDefault();

            //Validate

            if(title.trim() === '' || body.trim() === ''){
                getError(true);
                return;
            }
                getError(false);

            //Call Api

            const response = await axios.post (`https://jsonplaceholder.typicode.com/posts`, getdatapost);

            if (response.status === 200 || response.status === 201){
                AddPost(response.data);
            }

            setOpen(false);

            getDataPost({
                title:'',
                body:''
            });


        }


        return ( 

            <div className="row m-auto">
                <div className="col-md-12">
                    <Bounce top>
                        <img className=" mb-5 img-title" src={imagen} alt="Posts List"/>
                    </Bounce>
                    <div className="col-md-6 offset-md-6">
                        {error ? <Error message= "All fields are required" /> : null}
                        <button
                            className="btn btn-info btn-form-user float-right"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            Add new post!
                        </button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <form onClick={SubmitPost} id="form">
                                    <Form.Group  controlId="formBasicEmail">
                                        <Form.Control className="input-2 mb-1" name="title" value={title}  type="text" placeholder="Title" onChange={SubmitPosts}/>
                                        <Form.Control className="mb-1 input-2" as="textarea" name="body"  value={body} type="text" placeholder="Post comment" onChange={SubmitPosts}/>
                                        <button type="submit" className="btn btn-info btn-block">Add</button>
                                    </Form.Group>      
                                </form>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="row mt-5">
                {Infopost.map(info => (
                        <Post
                        key={info.id}
                        info={info}
                        />
                ))}
                </div>
            </div>

        );
    }


export default Posts;
