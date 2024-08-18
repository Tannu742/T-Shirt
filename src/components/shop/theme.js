import React from 'react';

const ThemeProducts = ({ img, name }) => {
    return (
        <div className='shopTheme col-2_3'>
            <img className="w-100" src={img} alt="ProductImg" />
            <p>{name}</p>
        </div>
    );
}

export default ThemeProducts;