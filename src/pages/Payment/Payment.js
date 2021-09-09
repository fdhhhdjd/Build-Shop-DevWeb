import React, { useState, useEffect } from "react";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../utils/BasketTotal";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../../utils/axios";
import { db } from "../../utils/firebase";
import { setBasketEmpty } from "../../Redux/Actions";
import { ToastContainer, toast, style } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const { user, basket } = useSelector((state) => state.data);
  const history = useHistory();
  let dispatch = useDispatch();
  const [successes, setSuccesses] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user && user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSuccesses(true);
        setError(null);
        setProcessing(false);
        dispatch(setBasketEmpty());
        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Thủ tục thanh toán 🤩:
          {<Link to="/checkout">{basket.length} items</Link>}
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Thông tin của bạn 🧐 </h3>
          </div>
          <div className="payment-address">
            <p>{user && user.email.split("@gmail.com")}</p>
            <p>Tổ 9 Thị Trấn Vạn Giã</p>
            <p>Khánh Hòa</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Sản phẩm mà bạn chọn 🤑</h3>
          </div>
          <div className="payment-items">
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
        <div className="payment-section">
          <div className="payment-title">
            <h3>Phương thức thanh toán </h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <br />
              {error ? (
                <div className="error">
                  Thẻ không phải như thế này bạn ơi 😥{" "}
                </div>
              ) : (
                <div className="success">
                  {" "}
                  "Mời bạn nhập số thẻ chuẩn mới chuyển đi được 🤑"
                </div>
              )}
              <br />
              <div className="payment-price-container">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Tổng tiền:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandsSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disable || successes}>
                  <span>
                    {processing ? <p>Processing...</p> : "Mua Ngay 🤏"}
                  </span>
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
