import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
const Dropdown = ({ select, setSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    {
      id: 1,
      name: "ALL",
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
    {
      id: 4,
      name: "Angular",
      path: "angular",
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
                    <Link to={`/${item.path}`}>{item.name}</Link>
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
