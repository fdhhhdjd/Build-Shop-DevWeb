import React from "react";
import "./Home.css";
import { products, headerItems } from "../../utils/ProductsData";
import Slider from "../../components/Slider/Slider";
import Product from "../../components/Product/Product";
import Banner1 from "../../BannerImages/Banner1.jpg";
import Banner2 from "../../BannerImages/Banner2.jpg";
import Banner3 from "../../BannerImages/Banner3.jpg";
import Banner4 from "../../BannerImages/Banner4.jpg";
import Banner5 from "../../BannerImages/Banner5.jpg";
import Banner6 from "../../BannerImages/Banner6.jpg";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "./Footer/Footer";
import ThemeColor from "../../components/ChangeTheme/ThemeColor";
const Home = () => {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  return (
    <div>
      <div className="item-container">
        {headerItems &&
          headerItems.map((item, index) => {
            return <p key={item}>{item}</p>;
          })}
      </div>
      <div className="home">
        <div className="home-container">
          <Slider images={bannerImages} />
          <div className="home-row">
            {products.slice(0, 2).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div className="home-row">
            {products.slice(2, 5).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div className="home-row">
            {products.slice(5, 7).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div className="home-row">
            {products.slice(7, 10).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div className="home-row">
            {products.slice(10, 12).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div className="home-row">
            {products.slice(12, 15).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div>
            <BackToTop />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
