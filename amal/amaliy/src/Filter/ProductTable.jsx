import React from "react";
import {ProductRow} from "./ProductRow";


function ProductTable(props) {
    const filterText = props.filterText;
    const inSockOnly = props.inStockOnly;

    const rows = [];
    props.products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (inSockOnly && !product.stocked) {
            return;
        }
        rows.push(<ProductRow product={product} key={product.name}/>)
    })
    return (
        <table>
            <thead>
            <tr>
                <th align='left'>Nomi</th>
                <th align='left'>Narxi</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}

export  default ProductTable;