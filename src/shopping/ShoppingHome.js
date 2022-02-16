import React from 'react'
import "./ShoppingHome.css";
import Product from './Product';
function ShoppingHome() {
    return (
        <div className="home">
            <img className="home_image" src="https://m.media-amazon.com/images/I/91YWi5LZ8eL._SX3000_.jpg" alt="" srcset="" />
            <div className="home_row">
                <Product
                    id="1"
                    title="Apple iPhone 13 Pro Max 128 GB, Sierra Blue"
                    price={129900}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
                />
                <Product
                    id="2"
                    title="Mi 11 Ultra 5G (12Gb+256Gb, Ceramic Black)"
                    price={69999}
                    rating={4}
                    image="https://i.gadgets360cdn.com/products/large/mi-11-ultra-db-800x800-1617265287.jpg"
                />
                <Product
                    id="2"
                    title="Samsung S21 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage)"
                    price={103999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg"
                />
                <Product
                    id="2"
                    title="Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 256GB Storage)"
                    price={149999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71MmJNwZcML._SX679_.jpg"
                />
                <Product
                    id="2"
                    title="OnePlus 9 Pro 5G (Morning Mist, 8GB RAM, 128GB Storage)"
                    price={64999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61LvUvbZGlL._SL1500_.jpg"
                />

            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title="Leather Retail Faux Leather Jacket For Woman And Girls"
                    price={1999}
                    rating={5}
                    image="https://5.imimg.com/data5/IF/ZW/JY/SELLER-14618958/leather-retail-cherry-colour-faux-leather-long-jacket-for-woman-500x500.jpg"
                />
                <Product
                    id="4"
                    title="STC Women's & Girls' Shirt"
                    price={399}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71VfPsg5ZPL._UL1500_.jpg"
                />
                <Product
                    id="5"
                    title="Be savage Love Yourself BTS Crop Hoodie fir Girls and Women Crop Sweatshirt and Crop Tops or Girls"
                    price={599}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/711AatnujVL._UY550_.jpg"
                />
                <Product
                    id="5"
                    title="Kids Toddler Baby Girl Boy Hoodies Mamas Mini Letter Pullover Sweatshirt Children Long Sleeve Hooded Tops"
                    price={849}
                    rating={4}
                    image="https://sc04.alicdn.com/kf/H5433d0c26ac24b65a4a6aef51b4baa4e5.jpg"
                />
                <Product
                    id="5"
                    title="Miss Chase Women's Maroon Pearl Hooded Crop Sweatshirt"
                    price={1044}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71P0Un83SrL._UY550_.jpg"
                />

            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title="IndoPrimo Men's Regular Fit Casual Shirt"
                    price={499}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61NkUX5oJ1L._UX569_.jpg"
                />
                <Product
                    id="4"
                    title="Exquisite Cedar Men's Leather Jacket"
                    price={1200}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/2501/3150/products/Brown-leather-jacket-mens-1_1600x.jpg"
                />
                <Product
                    id="5"
                    title="Ripped Biker Jeans For Men"
                    price={1196}
                    rating={5}
                    image="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/21264/188089/Ripped-Biker-Jeans-For-Men-Size-42-Skinny-Jeans-Elastic-Denim-Biker-Jeans-Masculino-2018-Stretch__41404.1546340871.jpg?c=2"
                />
                <Product
                    id="5"
                    title="6XL Hoodies Men Brand Male Long Sleeve Hoodie "
                    price={1196}
                    rating={5}
                    image="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/1881/7480/6XL-Hoodies-Men-Brand-Male-Long-Sleeve-Hoodie-Sweatshirt-Mens-Oblique-Zipper-Moletom-Slim-Tracksuit-Sportswear__51273.1577078359.jpg?c=2?imbypass=on"
                />
                <Product
                    id="5"
                    title="Scott International Men's Regular Fit T-Shirt (Pack of 3)"
                    price={449}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71vp8Lec9JL._UX466_.jpg"
                />

            </div>
        </div>
    );
}

export default ShoppingHome;








