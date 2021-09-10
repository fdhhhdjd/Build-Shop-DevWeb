import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
const Error = () => {
  return (
    <>
      <div className="body111">
        <div className="body-error">
          <nav>
            <div className="menu">
              <p className="website_name p1">Tài Heo Dev-Web</p>
              <img src={logo} alt="" className=" image-error " />
            </div>
          </nav>
          <section className="wrapper">
            <div className="container">
              <div id="scene" className="scene" data-hover-only="false">
                <div className="circle" data-depth="1.2" />
                <div className="one" data-depth="0.9">
                  <div className="content">
                    <span className="piece" />
                    <span className="piece" />
                    <span className="piece" />
                  </div>
                </div>
                <div className="two" data-depth="0.60">
                  <div className="content">
                    <span className="piece" />
                    <span className="piece" />
                    <span className="piece" />
                  </div>
                </div>
                <div className="three" data-depth="0.40">
                  <div className="content">
                    <span className="piece" />
                    <span className="piece" />
                    <span className="piece" />
                  </div>
                </div>
                <p className="p404 p1" data-depth="0.50">
                  404
                </p>
                <p className="p404 p1" data-depth="0.10">
                  404
                </p>
              </div>
              <div className="text">
                <article>
                  <p className="p1">
                    Ôi không 😥! Trang này không tồn tại. <br />
                    Mời bạn quay trở lại trang Home!
                  </p>
                  <Link to="/">
                    <button className="button1">Go Home 🔙!</button>
                  </Link>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Error;
