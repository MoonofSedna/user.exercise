import React from 'react';


    const Todo = ({info}) => {
        const {title, completed} = info;
        var status;

        if (completed === true || completed === "true"){
            var status= <p className= "text-success">Complete</p>
        } else {
            var status = <p className="text-danger">Incomplete</p>
        }
        return ( 
            
            <div className="card todo-card mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <p href="#!">{title}</p>
                        </div>
                        <div className="col-md-6 text-right">
                            <span>{status}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 
export default Todo;