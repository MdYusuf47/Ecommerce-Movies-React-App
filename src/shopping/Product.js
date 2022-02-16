import React from 'react';
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
function Product({ id, title, image, price, rating }) {
    const addToBasket = () => { };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p><StarIcon /></p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
