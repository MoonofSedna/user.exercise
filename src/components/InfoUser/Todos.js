import React, {useContext, useState} from 'react';
import Todo from './Todo';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Bounce from 'react-reveal/Bounce';
import Error from '../Error';
import imagen from '../../img/todo-1.png';
import {ModalContext} from '../../context/ModalContext';
import axios from 'axios';


    const Todos = () => {
        

        const{Infotodos, saveInfotodos} = useContext(ModalContext);

        const [error, getError] = useState(false);
        const [open, setOpen] = useState(false);
        const [getdatatodo, getDataTodo] = useState({
            title:'',
            completed:''
        });

        const {title, completed} = getdatatodo;

        const SubmitTodos = e => {

            getDataTodo({
                ...getdatatodo,
                [e.target.name] : e.target.value
            })
        }

        const AddTodo = (newTodo) => {

            const NewTodos = [
                newTodo,
                ...Infotodos
            ];
            
            saveInfotodos(NewTodos);
        }

        const SubmitTodo = async (e) => {

            e.preventDefault();

            //Validate

            if(title.trim() === '' || completed.trim() === ''){
                getError(true);
                return;
            }
                getError(false);

            //Call Api

            const response = await axios.post (`https://jsonplaceholder.typicode.com/todos`, getdatatodo);

            if (response.status === 200 || response.status === 201){

                AddTodo(response.data);

            }

            setOpen(false);

            getDataTodo({
                title:'',
                completed:''
            });


        }

        return ( 

            <div className="row m-auto">
                <div className="col-md-12">
                    <Bounce top>
                        <img src={imagen} className="mb-5 img-title" alt="TodoList"/>
                    </Bounce>
                    <div className="col-md-6 offset-md-6">
                        {error ? <Error message= "All fields are required" /> : null}
                        <button
                            className="btn btn-info btn-form-user"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            Add new to do!
                        </button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <form id="form" onSubmit={SubmitTodo}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control className="input-2 mb-1" name="title" value={title}  type="text" placeholder="Task" onChange={SubmitTodos}/>
                                        <Form.Group>
                                            <Form.Label as="legend" className="input-2" column sm={2}>
                                                    Status
                                            </Form.Label>
                                                    <Form.Check
                                                        className="input-2"
                                                        type="radio"
                                                        name="completed"
                                                        label="Complete"
                                                        value="true"
                                                        onChange={SubmitTodos}
                                                    />
                                                    <Form.Check
                                                        className="input-2"
                                                        type="radio"
                                                        name="completed"
                                                        label="Incomplete"
                                                        value="false"
                                                        onChange={SubmitTodos}
                                                    />
                                        </Form.Group>
                                        <button type="submit" className="btn btn-info btn-block">Add</button>
                                    </Form.Group>
                                </form>
                            </div>
                        </Collapse>
                    </div>
                </div>

            <div className="row mt-5">
                {Infotodos.map(info => (
                    <Todo
                        key={info.id}
                        info={info}
                    />
                ))}
            </div>
        </div>
        );
        
    }
 
export default Todos;