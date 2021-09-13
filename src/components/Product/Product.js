import React, { useContext } from "react";
import "./Product.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../../UseContext/ChangeTheme/ChangeTheme";
import { addToCart, loadCurrentItem } from "../../Redux/Actions";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const onAddItemBasket = () => {
    dispatch(addToCart(product.id));
  };
  const ClickItem = () => {
    dispatch(loadCurrentItem(product));
  };
  return (
    <div className="product">
      <div className="info">
        <Link to={`/product/${product.id}`} className="title">
          <p onClick={ClickItem}>{product.title}</p>
        </Link>
        <p className="price">
          <strong>Price: $</strong>
          <strong>{product.price}</strong>
        </p>
        <div className="rating">Rating: {product.rating.rate} ⭐</div>

        <div className="rating">quantity: {product.rating.count} 🤏</div>
      </div>
      <img src={product.image} alt={product.title} />
      <button onClick={onAddItemBasket}>
        <i>
          <ShoppingCartOutlinedIcon />
        </i>
        Add To basket
      </button>
    </div>
  );
};

export default Product;
