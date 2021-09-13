import React, { useEffect } from "react";
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
import { setProducts } from "../../Redux/Actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  const { basket } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, []);
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
            {basket.slice(0, 3).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="home-row">
            {basket.slice(3, 6).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="home-row">
            {basket.slice(6, 9).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="home-row">
            {basket.slice(9, 12).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="home-row">
            {basket.slice(12, 15).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="home-row">
            {basket.slice(15, 18).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="home-row">
            {basket.slice(18, 20).map((product) => (
              <Product key={product.id} product={product} />
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
