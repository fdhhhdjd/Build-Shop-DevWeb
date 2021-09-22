import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dropdown.css";
const Dropdown = ({ select, setSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "") {
      setSelect("All product 😍");
    } else if (location.pathname === "/cocktail") {
      setSelect("Cocktail");
    } else if (location.pathname === "/clothes") {
      setSelect("Clothes");
    }
  }, [location]);
  const options = [
    {
      id: 1,
      name: "All product 😍",
      path: "",
    },
    {
      id: 2,
      name: "Cocktail",
      path: "cocktail",
    },
    {
      id: 3,
      name: "Clothes",
      path: "clothes",
    },
  ];
  return (
    <div>
      <div className="dropdown">
        <div className="dropbtn" onClick={(e) => setIsActive(!isActive)}>
          {select}
          <i className="fas fa-caret-down"></i>
          {isActive && (
            <div class="dropdown-content">
              {options.map((item) => (
                <>
                  <div
                    className="dropdown-item"
                    onClick={(e) => {
                      setSelect(item.name);
                      setIsActive(false);
                    }}
                  >
                    <Link to={`/${item.path}`}>
                      <p onClick={() => setSelect(`${item.name}`)}>
                        {item.name}
                      </p>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
