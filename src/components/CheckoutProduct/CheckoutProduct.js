import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./CheckoutProduct.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { adjustItemQty, removeFromCart } from "../../Redux/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CheckoutProduct = ({ item }) => {
  const [input, setInput] = useState(item.qty);
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    if (window.confirm("Are you sure you want to remove 😔")) {
      dispatch(
        removeFromCart(item.id),
        toast.error("Bạn đã xóa thành công 🥺")
      );
    } else {
      return;
    }
  };
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(item.id, e.target.value));
  };
  return (
    <div className="checkout-product">
      <img src={item.image} alt="image" className="checkout-product-image" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{item.title}</p>
        <p className="checkout product-price">
          <div className="cartItem__action">
            <div className="cartItem__qty  ">
              <label htmlFor="qty">Số lượng:</label>
              <input
                min="1"
                type="number"
                id="qty"
                name="qty"
                value={input}
                onChange={onChangeHandler}
              />
              &nbsp;&nbsp;
              <strong>$</strong>
              <strong>{item.price}</strong>
            </div>
          </div>
        </p>
        {/* <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div> */}
        <br />

        <button onClick={removeItemFromBasket}>
          <i>
            <ShoppingCartOutlinedIcon />
          </i>
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
