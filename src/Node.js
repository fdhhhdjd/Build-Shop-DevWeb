//todo:  fill(): sữa dổi giá trị ví dụ ở product.js
//todo: split(): cat chuoi vi du @gmail.com
//todo: findIndex() phương thức trả về chỉ số của phần tử đầu tiên trong mảng thỏa mãn chức năng kiểm tra được cung cấp.
//todo:............ Nếu không, nó trả về -1, cho biết rằng không có phần tử nào vượt qua bài kiểm tra.
//!nhan du lieu customer: npm i @stripe/stripe-js @stripe/react-stripe-js
// todo npm:npm npm i cors,npm i stripe
//! npm i redux-persist luu lai khi trang bi loading khi mua do hang

<ul>
  <li className="nav-item">
    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
      Home
    </Link>
  </li>
  <li
    className="nav-item"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
      Services <i className="fas fa-caret-down" />
    </Link>
    {dropdown && <Dropdown />}
  </li>
</ul>;
