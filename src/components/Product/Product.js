import React, { useContext } from "react";
import "./Product.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, loadCurrentItem } from "../../Redux/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = ({ product, error }) => {
  const dispatch = useDispatch();
  const onAddItemBasket = () => {
    dispatch(
      addToCart(product.id),
      toast.success("Bạn đã thêm giỏ hàng thành công 😉")
    );
  };
  const ClickItem = () => {
    dispatch(loadCurrentItem(product));
  };
  return (
    <div className="product">
      {error && <p className="text-danger">{error}</p>}
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
