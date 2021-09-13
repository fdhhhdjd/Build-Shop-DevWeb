import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import SubTotal from "../../components/SubTotal/SubTotal";
import "./Checkout.css";
const Checkout = () => {
  const { user, cart, basket } = useSelector((state) => state.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout-ad"
        />

        <div>
          <h3>
            {user
              ? " Xin chào,người Bạn xinh đẹp 😗,"
              : "Tên bạn cũng chưa có,bạn chưa đăng nhập luôn đó 😞"}
            {user?.email.split("@gmail.com")}.
          </h3>
          <h2 className="checkout-title">
            {cart.length === 0
              ? "Giỏ hàng bạn chưa có gì cả 😌"
              : "Giỏ hàng của bạn có những thứ như sau: 😍"}
          </h2>

          {cart.map((item) => (
            <CheckoutProduct key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <SubTotal totalPrice={totalPrice} totalItems={totalItems} />
      </div>
    </div>
  );
};

export default Checkout;
