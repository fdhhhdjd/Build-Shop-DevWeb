import React, { useContext } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { products } from "../../utils/ProductsData";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";

import { ThemeContext } from "../../UseContext/ChangeTheme/ChangeTheme";
import ThemeColor from "../../components/ChangeTheme/ThemeColor";
import { addToCart } from "../../Redux/Actions";
const SingleProduct = () => {
  const { currentItem } = useSelector((state) => state.data);
  const current = currentItem;
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToCart(current.id));
  };
  const { theme } = useContext(ThemeContext);
  const { light, dark, common, isFlag } = theme;
  const themeStyle = { ...(isFlag ? dark : light), ...common };
  return (
    <div className="single-product-container" style={themeStyle}>
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
        className="single-product-ad"
      />
      <div>
        <div className="single-product">
          <img
            src={current.image}
            alt={current.title}
            className="single-product-image"
          />
          <div className="single-product-info">
            <div className="single-product-title">{current.title}</div>
            <div className="single-product-rating">
              {/* {Array(singleProduct.rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>⭐</p>
                ))} */}
              {current.rating.rate} ⭐
            </div>
            <div className="single-product-rating">
              quantity: {current.rating.count} 🤏
            </div>

            <p className="single-product-price">
              price:<strong>$</strong>
              <strong>{current.price}</strong>
            </p>

            <div className="single-product-description">
              <h4>Product Description</h4>
              <p>{current.description}</p>
            </div>
            <button onClick={addItemToBasket}>
              <i>
                <ShoppingCartOutlinedIcon />
              </i>
              Add To Basket
            </button>
          </div>
        </div>
        <ThemeColor />
      </div>
    </div>
  );
};

export default SingleProduct;
