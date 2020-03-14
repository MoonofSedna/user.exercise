import React from 'react';
import HeadShake from 'react-reveal/HeadShake';


const Error = ({message}) => {
    return ( 
        <HeadShake>
            <div class="alert mt-3" role="alert">
            {message}
            </div>
        </HeadShake>
     );
}
 
export default Error;