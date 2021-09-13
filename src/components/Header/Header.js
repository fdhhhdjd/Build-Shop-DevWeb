import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import Search from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { LogoutInitiate, SearchAllProduct } from "../../Redux/Actions";
import Dropdown from "../Dropdown/Dropdown";
const Header = () => {
  const { user, basket, cart } = useSelector((state) => state.data);
  const [state, setState] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [select, setSelect] = useState("Choose Product");
  const dispatch = useDispatch();
  const searchValue = useRef();
  // const searchCocktail = (e) => {
  //   dispatch(SearchAllProduct(searchValue.current.value));
  // };
  const handleAuthLogout = (resp) => {
    if (user) {
      dispatch(LogoutInitiate(resp));
    }
  };
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="" className="header-logo" />
      </Link>
      <div className="header-option" style={{ marginRight: "-10px" }}>
        <LocationOnOutlinedIcon />
      </div>
      <div className="header-option">
        <span className="header-option1">xin chao</span>
        <span className="header-option2">Location</span>
      </div>
      <div className="search">
        <Dropdown select={select} setSelect={setSelect} />

        <input
          type="text"
          className="search-Input"
          // ref={searchValue}
          // onChange={searchCocktail}
        />
        <Search className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={`${user ? "/" : "login"}`} className="header-link">
          <div className="header-option" onClick={handleAuthLogout}>
            <span className="header-option1">
              {user ? " hello 😄" : "No,go Login "},
              {user ? user.email.split("@gmail.com") : "😞"}
            </span>
            <span className="header-option-1">
              {user ? "Log Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header-link">
          <div className="header-option">
            <span className="header-option1">Returns</span>
            <span className="header-option2">& Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option1">Your</span>
            <span className="header-option2">Prime</span>
          </div>
        </Link>
        <Link
          // to={`${user ? "/checkout" : "/login"}`}
          to="/checkout"
          className="header-link"
        >
          <div className="header-basket">
            <ShoppingCartOutlinedIcon />
            <span className="header-option2 basket-count ">{cartCount}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
