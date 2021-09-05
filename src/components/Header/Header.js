import React from "react";
import "./Header.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import logo from "../../Images/logo.png";

import { Link } from "react-router-dom";
import Search from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { LogoutInitiate } from "../../Redux/Actions";
const Header = () => {
  const { user } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleAuthLogout = (resp) => {
    if (user) {
      dispatch(LogoutInitiate(resp));
    }
  };
  // useEffect(() => {
  //  if()
  // }, [dispatch])
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
        <span className="header-option2">oke</span>
      </div>
      <div className="search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="search-Input" />
        <Search className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={`${user ? "/" : "login"}`} className="header-link">
          <div className="header-option" onClick={handleAuthLogout}>
            <span className="header-option1">
              hello,{user ? user.email : "😞"}
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
        <Link to="/checkout" className="header-link">
          <div className="header-basket">
            <ShoppingCartOutlinedIcon />
            <span className="header-option2 basket-count ">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
