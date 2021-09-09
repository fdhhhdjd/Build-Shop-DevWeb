import React from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { products } from "../../utils/ProductsData";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../Redux/Actions";
const SingleProduct = () => {
  let { id } = useParams();
  let singleProduct = products.find((item) => item.id === id);
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const item = {
      id: singleProduct.id,
      rating: singleProduct.rating,
      title: singleProduct.title,
      price: singleProduct.price,
      image: singleProduct.image,
      specification: singleProduct.specification,
      detail: singleProduct.detail,
    };
    dispatch(addToBasket(item));
  };
  return (
    <div className="single-product-container">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
        className="single-product-ad"
      />
      <div>
        <div className="single-product">
          <img
            src={singleProduct.image}
            alt=""
            className="single-product-image"
          />
          <div className="single-product-info">
            <div className="single-product-title">{singleProduct.title}</div>
            <div className="single-product-rating">
              {Array(singleProduct.rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>⭐</p>
                ))}
            </div>
            <p className="single-product-price">
              price:<strong>$</strong>
              <strong>{singleProduct.price}</strong>
            </p>
            <div className="single-product-specification">
              {singleProduct.specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
            <div className="single-product-description">
              <h4>Product Description</h4>
              <p>{singleProduct.detail}</p>
            </div>
            <button onClick={addItemToBasket}>
              <i>
                <ShoppingCartOutlinedIcon />
              </i>
              Add To Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
