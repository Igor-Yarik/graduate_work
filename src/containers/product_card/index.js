import React from "react";
import './styles.css'
import logo from '../../images/logo.svg'

const ProductCard = () => {
    return (
        <div className="product_card">
            <img className="products_img" src={logo} alt="logo_images"></img>
            <div className="product_card_items">
                <h2 className="product_card_title">Ноутбук Lenovo Y50-70 Aluminum Black</h2>
                <div className="product_card_item">
                    <div className="product_card_supitem">
                        <img className="product_card_img" src="products_img.png" alt="products_img"></img>
                        <div className="product_card_subitem">
                            <p className="product_card_availability">Є в наявності</p>
                            <p className="product_card_price">25000₴</p>
                            <p className="product_card_quantity">Кількість: <span>5</span></p>
                        </div>
                    </div>
                    <p className="product_card_description">Опис <span>Ноутбук Lenovo Y50-70 Aluminum Black</span></p>
                    <h4 className="product_card_description_title">15.6-дюймовий дисплей стандарту Full HD</h4>
                    <p className="product_card_description_text">Фільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 x 1080).</p>
                    <h4 className="product_card_description_title">Динаміки преміум-класу</h4>
                    <p className="product_card_description_text">Стереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор та музики.</p>
                    <h4 className="product_card_description_title">Dolby Advanced Audio</h4>
                    <p className="product_card_description_text">Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кришталево чіткий просторовий звук за допомогою вбудованих динаміків.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;