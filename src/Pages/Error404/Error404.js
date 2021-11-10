import React from 'react';

import error404 from '../../Images/error.png'

const Error404 = () => {
    return (
        <div>
            <img className="w-100" src={error404} alt="Error"/>
        </div>
    );
};

export default Error404;