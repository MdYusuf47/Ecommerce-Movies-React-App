import React from 'react';
import "./HoomeProduct.css";
import StarIcon from '@mui/icons-material/Star';
function HoomeProduct({ id, title, image, price, rating, description }) {

    return (
        <div className="homeproduct">
            <img src={image} alt="" />
            <div className="homeproduct_info">
                <h5>{title}</h5>
                <p>{description}</p>
                <p className="homeproduct_price">
                    <small></small>
                    <strong>{price}</strong>
                </p>
                <div className="homeproduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p></p>
                            ))
                    }
                </div>
            </div>


        </div>
    );
}

export default HoomeProduct;
