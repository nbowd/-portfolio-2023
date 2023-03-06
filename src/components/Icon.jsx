import React from 'react';

function Icon({name, image,  handleClick, alt}) {
    return (
        <div onClick={handleClick} className="icon">
            <img src={image} alt={alt} />
            <p>{name}</p>
        </div>
    );
}

export default Icon;