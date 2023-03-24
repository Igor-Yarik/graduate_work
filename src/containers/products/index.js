import React from "react";
import './styles.css'
import logo from '../../images/logo.svg'
import TableProducts from "../../components/table_products";

const Products = () => {
    return (
        <div className="products">
            <img className="products_img" src={logo} alt="logo_images"></img>
            <div className="products_item">
                <button className="products_btn">Preview</button>
                <button className="products_btn">Add product</button>
            </div>
            <h1 className="products_title">Products</h1>
            <TableProducts />
        </div>
        
    )
}

export default Products;