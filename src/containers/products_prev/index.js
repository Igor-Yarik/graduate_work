import React from "react";
import './styles.css'
import logo from '../../images/logo.svg'
import ProductsPrevItem from "../../components/item_products";

const ProductsPrev = () => {
    return (
        <div className="products_prev">
            <img className="products_img" src={logo} alt="logo_images"></img>
            <div className="products_prev_items">
                <ProductsPrevItem />
                <ProductsPrevItem />
                <ProductsPrevItem />
                <ProductsPrevItem />
                <ProductsPrevItem />
                <ProductsPrevItem />
            </div>
        </div>
    )
}

export default ProductsPrev;