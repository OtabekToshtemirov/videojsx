import React, {Component} from "react";
import {ProductRow} from "./ProductRow";


class ProductTable extends Component{
    constructor(props) {
        super(props);


    }
    render() {
        const filterText = this.props.filterText;
        const inSockOnly = this.props.inStockOnly;

        const rows =[];
        this.props.products.forEach((product) => {
            if (product.name.toLowerCase().indexOf(filterText.toLowerCase())===-1){
                return;
            }
            if (inSockOnly && !product.stocked ){
                return;
            }
            rows.push(<ProductRow product={product} key={product.name}/>)
        })
        return(
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

}

export  default ProductTable;