import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../utils/BasketTotal";

const SubTotal = () => {
  const { user, basket } = useSelector((state) => state.data);
  const history = useHistory();
  const handleCheckout = () => {
    if (user) {
      history.push("/payment");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Tổng tiền ({basket.length} sản phẩm): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              Nếu bạn đồng ý
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleCheckout}>Chấp nhận vào thủ tục thanh toán</button>
    </div>
  );
};

export default SubTotal;
