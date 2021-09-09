import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../utils/BasketTotal";
import { useSelector } from "react-redux";
const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM DD YYYY,h:mma")}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          specification={item.specification}
          detail={item.detail}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order-total">Oder Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
