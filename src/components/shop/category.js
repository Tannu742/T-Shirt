import React from 'react';

const CategoryProducts = ({img, name}) => {
    return (
        <div className='ShopCategory col-2_3'>
           <img  className="w-100" src={img} alt="ProductImg" />
           <p>{name}</p>
        </div>
    );
}

export default CategoryProducts;
