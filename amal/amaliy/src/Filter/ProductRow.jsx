import React from 'react';


export function ProductRow({product}) {
    const [product] = product;
    const name = product.stocked ? product.name : <span style={{color: 'red'}}> {product.name} </span>;
    return (

        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
};