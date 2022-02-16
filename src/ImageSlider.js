import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import { Link } from "react-router-dom";
export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Slider {...settings} className="allimages">
            <div className="imgslider">
                <Link className="imagelink" to="">
                    <img src="/images/slider-badag.jpg" alt="" />
                </Link>
            </div>
            <div className="imgslider">
                <Link className="imagelink" to="">
                    <img src="/images/s-2.jpg" alt="" />
                </Link>
            </div>
            <div className="imgslider">
                <Link className="imagelink" to="">
                    <img src="/images/s-1.jpg" alt="" />
                </Link>
            </div>
            <div className="imgslider">
                <Link className="imagelink" to="">
                    <img src="/images/slider-scale.jpg" alt="" />
                </Link>

            </div>
            <div className="imgslider">
                <Link className="imagelink" to="">
                    <img src="/images/ss.jpg" alt="" />
                </Link>
            </div>
            <div className="imgslider">
                <Link className="imagelink" to="">
                    <img src="/images/ggi.jpg" alt="" />
                </Link>
            </div>
            <div className="imgslider">
                <Link className="imagelink" to="">
                    <img src="/images/jj.jpg" alt="" />
                </Link>
            </div>
        </Slider>
    );
}