import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header/Header";
// import Error from "./Error/Error";
import { auth } from "../utils/firebase";
import { setUser } from "../Redux/Actions";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "../components/Loading/Loading";
import Cocktail from "./Home/Select/Cocktail/Cocktail";
import Clothes from "./Home/Select/Clother/Clothes";

// ! const Login = lazy(() => import("./Login/Login"));
const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Home/Home")), 1000);
  });
});
const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Login/Login")), 800);
  });
});
const Register = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Register/Register")), 800);
  });
});
const Checkout = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Checkout/Checkout")), 800);
  });
});
const Payment = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Payment/Payment")), 800);
  });
});
const Orders = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../pages/Orders/Orders")), 800);
  });
});
const ForgetPassword = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./ForgetPassword/ForgetPassword")), 800);
  });
});
const SingleProduct = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./SingleProduct/SingleProduct")), 800);
  });
});
const TeamWord = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./TeamWord/TeamWord")), 800);
  });
});
const Help = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./HelpCustomer/Help")), 800);
  });
});
const Error = lazy(() => import("./Error/Error"));
const promise = loadStripe(
  "pk_test_51JXQenIBbq837XS88GNqnCjmCQ1s6JO1Dahwp43mCdZyev4l4465VtkrQhdc1JQJLyMm4ylC3mXVgADX0zM396hq00PnaQqeBv"
);
const Main = () => {
  const dispatch = useDispatch();
  const [Toggle, setToggle] = useState(true);
  const formMode = () => {
    setToggle(!Toggle);
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/register">
              <Register toggle={() => formMode()} />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/forgot-password">
              <ForgetPassword />
            </Route>
            <Route exact path="/team-word">
              <Header />
              <TeamWord />
            </Route>
            <Route exact path="/help">
              <Header />
              <Help />
            </Route>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/cocktail">
              <Header />
              <Cocktail />
            </Route>
            <Route exact path="/clothes">
              <Header />
              <Clothes />
            </Route>

            <Route exact path="/product/:id">
              <Header />
              <SingleProduct />
            </Route>
            <Route exact path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route exact path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route exact path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route exact path="*" component={Error} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default Main;
