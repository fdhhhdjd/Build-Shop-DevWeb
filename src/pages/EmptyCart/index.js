import React from "react";
import { useHistory } from "react-router";
import "./styles.css";

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className="emptyCart">
      <img
        src="https://merchlist.co/assets/emptycart.png"
        alt=""
        onClick={() => history.push("/")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default EmptyCart;
