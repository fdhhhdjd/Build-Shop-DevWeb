import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import SubTotal from "../../components/SubTotal/SubTotal";
import "./Checkout.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import EmptyCart from "../EmptyCart";

const Checkout = () => {
  const { user, cart, basket } = useSelector((state) => state.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price.toFixed(2));
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  //!Paginator
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(cart.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="number" onClick={handleNextbtn}>
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className="number" onClick={handlePrevbtn}>
        &hellip;
      </li>
    );
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };
  const renderData = (cart) => {
    return cart.map((item) => <CheckoutProduct key={item.id} item={item} />);
  };
  return (
    <div className="checkout">
      <ToastContainer style={{ marginTop: "45px" }} />
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout-ad"
        />
        <div>
          <h3>
            {user
              ? " Xin chào,người Bạn xinh đẹp 😗,"
              : "Tên bạn cũng chưa có,bạn chưa đăng nhập luôn đó 😞"}
            {user?.email.split("@gmail.com")}.
          </h3>
          <Link to="/">
            <button className="button_comeback">Come Back Product ◀️</button>
          </Link>
          <h2 className="checkout-title">
            {cart.length === 0 ? (
              <>
                "Giỏ hàng của bạn chẳng có gì 😔 "
                <EmptyCart />
              </>
            ) : (
              "Giỏ hàng của bạn có những thứ như sau: 😍"
            )}
          </h2>

          {/* Pagination */}

          {renderData(currentItems)}
          {cart.length === 0 ? (
            ""
          ) : (
            <>
              <ul className="pageNumbers">
                <li>
                  <button
                    onClick={handlePrevbtn}
                    disabled={currentPage == pages[0] ? true : false}
                  >
                    Prev
                  </button>
                </li>

                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}

                <li>
                  <button
                    onClick={handleNextbtn}
                    disabled={
                      currentPage == pages[pages.length - 1] ? true : false
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
              <button onClick={handleLoadMore} className="loadmore">
                Load More
              </button>
            </>
          )}
        </div>
      </div>

      <div className="checkout-right">
        <SubTotal totalPrice={totalPrice} totalItems={totalItems} />
      </div>
    </div>
  );
};

export default Checkout;
