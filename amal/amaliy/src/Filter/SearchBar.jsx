import React, {Component} from "react";

class SearchBar extends Component{
    constructor(props) {
        super(props);

    }

    handleFilterTextChange = (e) =>{
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange =(e) =>{
        this.props.onInStockChange(e.target.value);

    }


    render() {
        return(
            <div>
                <input type="text" placeholder='Izlash...' value={this.props.filterText} onChange={this.handleFilterTextChange}/>
                <p>
                    <input type="checkbox" id="onlyInStock" name="onlyInStock" onChange={this.handleInStockChange} checked={this.props.inStockOnly}/>
                    <label htmlFor="onlyInStock">Faqat omborda bor mahsulotlar</label>

                </p>
            </div>
        )
    }
}

export default SearchBar;