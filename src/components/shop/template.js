import React from 'react';

const TemplateProducts = ({img}) => {
    return (
        <div className=' col-5 pR-15'>
           <img  className="w-100" src={img} alt="ProductImg" />
        </div>
    );
}

export default TemplateProducts;
