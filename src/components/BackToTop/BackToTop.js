import React, { useEffect, useState } from "react";
import "./BackToTop.css";
const BackToTop = () => {
  const [show, setShow] = useState(false);
  const showBelow = 800;
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  }, [show]);
  return (
    <div>
      {show && <i className="fas fa-arrow-circle-up" onClick={handleClick} />}
    </div>
  );
};

export default BackToTop;
