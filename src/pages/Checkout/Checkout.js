import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import SubTotal from "../../components/SubTotal/SubTotal";
import "./Checkout.css";
const Checkout = () => {
  const { user, basket } = useSelector((state) => state.data);
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
            {basket.length === 0
              ? "Giỏ hàng bạn chưa có gì cả 😌"
              : "Giỏ hàng của bạn có những thứ như sau: 😍"}
          </h2>
          {basket &&
            basket.map((item) => (
              <CheckoutProduct
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
      </div>
      <div className="checkout-right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
