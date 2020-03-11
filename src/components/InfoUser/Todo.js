import React from 'react';


const Todo = ({info}) => {
    const {title} = info;
    return ( 
        
         <div className="col-md-12">  
            <a href="#!">{title}</a>  
         </div>
     );
}
 
export default Todo;