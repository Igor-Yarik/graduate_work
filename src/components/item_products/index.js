import React from "react";
import './styles.css'

const ProductsPrevItem = () => {
    return (
        <div className="products_prev_item">
            <a className="products_prev_link" href="https://www.google.com.ua/">
                <img src="products_img.png" alt="products_img"></img>
                <h3 className="products_prev_title">Ноутбук Lenovo Y50-70 Aluminum Black</h3>
                <div className="products_prev_subitem">
                    <p className="products_prev_price">25000₴</p>
                    <p className="products_prev_quantity">Кількість: <span>5</span></p>
                </div>
                <button className="products_prev_btn">Готовий до відправки</button>
            </a>
        </div>
    )
}

export default ProductsPrevItem;