import React, { useContext } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { products } from "../../utils/ProductsData";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ThemeContext } from "../../UseContext/ChangeTheme/ChangeTheme";
import ThemeColor from "../../components/ChangeTheme/ThemeColor";
import { addToCart } from "../../Redux/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingleProduct = () => {
  const { currentItem } = useSelector((state) => state.data);
  const current = currentItem;
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(
      addToCart(current.id),
      toast.success("Bạn đã thêm giỏ hàng thành công 😉")
    );
  };
  const { theme } = useContext(ThemeContext);
  const { light, dark, common, isFlag } = theme;
  const themeStyle = { ...(isFlag ? dark : light), ...common };
  return (
    <div className="single-product-container" style={themeStyle}>
      <ToastContainer style={{ marginTop: "45px" }} />
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
        className="single-product-ad"
      />
      <div>
        <div className="single-product">
          <TransformWrapper
            initialScale={0.75}
            initialPositionX={-50}
            initialPositionY={20}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <TransformComponent>
                  <img
                    src={current.image}
                    alt={current.title}
                    className="single-product-image"
                  />
                </TransformComponent>

                <div className="single-product-info">
                  <button onClick={() => zoomIn()}>Zoom In +</button>
                  <button onClick={() => zoomOut()}>Zoom Out -</button>
                  <button onClick={() => resetTransform()}>Return-X</button>
                  <div className="single-product-title">{current.title}</div>
                  <div className="single-product-rating">
                    {/* {Array(singleProduct.rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>⭐</p>
                ))} */}
                    {current.rating.rate} ⭐
                  </div>
                  <div className="single-product-rating">
                    quantity: {current.rating.count} 🤏
                  </div>

                  <p className="single-product-price">
                    price:<strong>$</strong>
                    <strong>{current.price}</strong>
                  </p>

                  <div className="single-product-description">
                    <h4>Product Description</h4>
                    <p>{current.description}</p>
                  </div>
                  <button onClick={addItemToBasket}>
                    <i>
                      <ShoppingCartOutlinedIcon />
                    </i>
                    Add To Basket
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
        <ThemeColor />
      </div>
    </div>
  );
};

export default SingleProduct;
