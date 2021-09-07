import React from "react";
import "./Team.css";
import quyen from "../../Images/quyen.jpg";
import logo from "../../Images/logo1.png";
import tai from "../../Images/tai.jpg";
import khang from "../../Images/khang.jpg";
import trung from "../../Images/trung.jpg";
import hoang from "../../Images/hoang.jpg";
import anhem from "../../Images/5anh em.jpg";
import BackToTop from "../../components/BackToTop/BackToTop";
import { Link } from "react-router-dom";
const TeamWord = () => {
  return (
    <div className="body1">
      <section id="hero">
        <div className="hero container11">
          <div>
            <h1>
              Xin chào, <span />
            </h1>
            <h1>
              Đây là Team Word <span />
            </h1>
            <h1>
              Company DevWeb <span />
            </h1>
            <a href="#projects" type="button" className="a cta ">
              Infomation 🧐 <span />
            </a>
          </div>
        </div>
      </section>
      {/* End Hero Section  */}
      {/* Service Section */}
      <section id="services">
        <div className="services container11">
          <div className="service-top">
            <h1 className="section-title">
              Serv<span>i</span>ces
            </h1>
            <p className="p">
              Công ty chúng tôi sử dụng những công nghệ mới nhất,để tạo ra một
              trang web hoàn chỉnh và giúp người tiêu dùng sử dụng một cách mượt
              mà và thoải mái nhất,công ty sử dụng
              ReacJs,Redux,Firebase,HeRoku,Graphic Designer
            </p>
          </div>
          <div className="service-bottom">
            <div className="service-item">
              <div className="icon">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  alt="logo"
                  className="img"
                />
              </div>
              <h2> ReactJs</h2>
              <p className="p">
                Đây là thư viện của Facebook tạo nên,là ngôn ngữ mạnh nhất thời
                điểm hiện tại được công ty build toàn bộ trang web giúp cho web
                mạnh mẽ nhất và an toàn.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img
                  src="https://e7.pngegg.com/pngimages/777/431/png-clipart-yellow-and-orange-firebase-logo-icons-logos-emojis-tech-companies.png"
                  alt="logo"
                  className="img"
                />
              </div>
              <h2>FireBase </h2>
              <p className="p">
                Firebase được công ty sử dụng gần như là toàn bộ trang web nơi
                này nhận tất cả dữ liệu khách hàng,cung cấp cho khách hàng một
                trải nghiệm tốt nhất khi mua hàng tại web.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                  className="img"
                />
              </div>
              <h2>Redux</h2>
              <p className="p">
                Redux của React được Công ty mang vào sử dụng với gần như tất cả
                trên web giúp cho người lập trình dễ bảo trì chăm sóc trang web
                dễ dàng hơn.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img
                  src="https://logowik.com/content/uploads/images/heroku8748.jpg"
                  className="img"
                />
              </div>
              <h2>Heroku</h2>
              <p className="p">
                Trang web được tài trợ bởi Heroku phần mềm build web trực tuyến
                mạnh nhất thế giới,đã được công ty Dev Web build lên trang web
                như bây giờ.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img
                  src="https://banner2.cleanpng.com/20190319/tzk/kisspng-logo-adobe-inc-adobe-photoshop-adobe-illustrator-partners-marketing-technology-testing-hosting-5c906e91c0fc52.4602114315529693617905.jpg"
                  className="img"
                />
              </div>
              <h2>Graphic design</h2>
              <p className="p">
                Tất cả logo đều được làm một các công phu,pha trộn với màu xắc
                hài hòa tạo nên một logo hết sức ấn tượng,baner được thiết kế
                chuẩn của design trên thế giới
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Service Section */}
      {/* Projects Section */}
      <section id="projects">
        <div className="projects container11">
          <div className="projects-header">
            <h1 className="section-title">
              Personnel <span>Dev-Web</span>
            </h1>
          </div>
          <div className="all-projects">
            <div className="project-item">
              <div className="project-info">
                <h1>Personnel 1</h1>
                <h2>Tên:Nguyễn Tiến Tài</h2>
                <br />
                <a
                  href="https://www.facebook.com/profile.php?id=100006139249437"
                  target="_blank"
                  className="a"
                >
                  <h2> Profile: 👉Nguyễn Tiến Tài ⭐</h2>
                </a>

                <br />
                <br />
                <p className="p">
                  21 tuổi là sinh viên năm 4,đang học tập tại trường đại học Nha
                  Trang ngành công nghệ thông tin về lĩnh vực công nghệ phần mềm
                  ,có chức vụ chính trong team làm về giao diện người dùng,xử lý
                  tất cả, kết nối với Firebase xử lý lỗi,build app.
                </p>
              </div>
              <div className="project-img">
                <img src={tai} alt="img" className="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Personnel 2</h1>
                <h2>Tên:Nguyễn Hữu Quyền</h2>
                <br />
                <a
                  href="https://www.facebook.com/jonhny.nguyen.184"
                  target="_blank"
                  className="a"
                >
                  <h2> Profile: 👉Nguyễn Hữu Quyền⭐</h2>
                </a>

                <br />
                <br />
                <p className="p">
                  21 tuổi,đang là sinh viên năm 4 tại trường Đại học Công nghệ
                  thành phố Hồ Chí Minh đang học lĩnh vực AI trí tuệ nhân
                  tạo,chuẩn bị sang Canada học tập và làm việc,công việc chính
                  bắt lỗi kiểm tra và đưa ra giải pháp để sữa lỗi.
                </p>
              </div>
              <div className="project-img">
                <img src={quyen} alt="img" className="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Personnel 3</h1>
                <h2>Tên:Nguyễn Bảo Khang</h2>
                <br />
                <a
                  href="https://www.facebook.com/khanhgiangg102"
                  target="_blank"
                  className="a"
                >
                  <h2> Profile: 👉Nguyễn Bảo Khang⭐</h2>
                </a>

                <br />
                <br />
                <p className="p">
                  21 tuổi,đang là sinh viên năm 2 tại trường Cao đẳng y dược nha
                  trang và đang làm thiết kế logo banner,.. online,công việc
                  chính là thiết kế banner và logo phù hợp với công ty thiết kế
                  theo phong thủy tạo nên một hình ảnh đẹp nhất chân thực nhất
                  về ý nghĩa web.
                </p>
              </div>
              <div className="project-img">
                <img src={khang} alt="img" className="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Personnel 4</h1>
                <h2>Tên:Trần Phi Hoàng</h2>
                <br />
                <a
                  href="https://www.facebook.com/hoang.p.tran.12"
                  target="_blank"
                  className="a"
                >
                  <h2> Profile: 👉Trần Phi Hoàng⭐</h2>
                </a>

                <br />
                <br />
                <p className="p">
                  21 tuổi,đang là sinh viên năm 4 tại trường Hutech lĩnh vực
                  công nghệ thông tin đang làm nghê bất động sản khu vực sài
                  gòn,công việc chính kêu gọi vốn cũng như đưa công ty đi lên
                  theo hình thức kinh doanh.
                </p>
              </div>
              <div className="project-img">
                <img src={hoang} alt="img" className="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Personnel 5</h1>
                <h2>Tên:Bùi Huỳnh Quốc Trung</h2>
                <br />
                <a
                  href="https://www.facebook.com/profile.php?id=100009136510942"
                  target="_blank"
                  className="a"
                >
                  <h2> Profile: 👉Bùi Huỳnh Quốc Trung⭐</h2>
                </a>
                <br />
                <br />
                <p className="p">
                  20 tuổi,đang là sinh viên năm 2 tại trường Đại học Nha Trang
                  đang học lĩnh vực điện điện tử,chức vụ kiểm thử web hoạt động
                  như thế nào trước khi đưa vào tay người tiêu dùng.
                </p>
              </div>
              <div className="project-img">
                <img src={trung} alt="img" className="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Projects Section */}
      {/* About Section */}
      <section id="about">
        <div className="about container11">
          <div className="col-left">
            <div className="about-img">
              <img src={anhem} alt="img" className="img" />
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">
              Team <span>Word</span>
            </h1>
            <h2>Web Developer,AI,Graphic Design,Kinh doanh bất động sản,</h2>
            <p className="p">
              Đây là những thành viên đó là những công việc chính của công
              ty,ngoài ra các thành viên còn có công việc làm thêm online khách
              hàng cần gọi team luôn sẵn sàng giúp đỡ và có thể làm những sản
              phẩm giúp cho khác hàng dùng và trãi nghiệm một cách tốt nhất,hãy
              gọi ngay cho team tôi khi bạn cần một sự giúp đỡ hoặc liên hệ công
              việc ,cảm ơn bạn đã đọc và trãi nghiệm sản phẩm của chúng tôi,cảm
              ơn rất nhiều.
            </p>
            <Link to="/login">
              <a href="#" className="cta a">
                Go back Login 🔙
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Contact Section */}
      <section id="contact">
        <div className="contact container11">
          <div>
            <h1 className="section-title">
              Contact <span>Team</span>
            </h1>
          </div>
          <div className="contact-items">
            <div className="contact-item">
              <div className="icon">
                <img
                  src="https://w7.pngwing.com/pngs/441/336/png-transparent-call-log-logo-iphone-4-iphone-3g-iphone-7-telephone-icon-phone-hd-electronics-text-telephone-call.png"
                  className="img"
                />
              </div>
              <div className="contact-info">
                <h1>Phone</h1>
                <a href="tel://0798805741" className="contact-phone">
                  <h2> +0798805741</h2>
                </a>
                {/* <a href="tel://0798805741" className="contact-phone">
                  <h2>Hữu Quyền:+0965823565</h2>
                </a>
                <a href="tel://0798805741" className="contact-phone">
                  <h2>Bảo Khang:+0353263452</h2>
                </a>
                <a href="tel://0798805741" className="contact-phone">
                  <h2>Phi Hoàng:+0981181805</h2>
                </a>
                <a href="tel://0798805741" className="contact-phone">
                  <h2>Quốc Trung:+0348561815</h2>
                </a> */}
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/1BMVEX////n49foWk749e7t7e22tqzu7u6yOTDr6+voUkbm6NrnTT/oqZ7w8O7+/Pv52tiyNSu2u7Hszcrw9PSyNSywMCazZVy1YFnHgn3QiYXoUkX5/vfRjonmSDroVkr5//jU08fg3dHKyb327+fz1czpk47pem/kW0/MTUK5QTfpal3shnrqcmXogXSxvLH13dbOzcLAv7Pa2M2uIhXs4N787Onuqpzr19fqurbpa2Lvo5ropZ/yzcP0uLTrzs7ukoj2trPjmZTmsKPDppzoyb3ZfHLmvbDKmY+9r6bTin7bem7mp5ndcmbn1MbNlozBqJ7crKi8WFGsHAG8TEPbvLiu5ueZAAAKxklEQVR4nO2d/V/bthbGEw87GJcWahi7NnHjUEgJFEiA8lJa7ujGxu7o7Xb3//8t147zYstH1pFtSY7r54dNn1KGvuhIz3NkM1qtUCuGYazUdNSqyDwawoaQSRhotaajyTCCXa3pyFBeRmJHRkO49CMjtiVXazmaHqjVmIyYUaRqFJRQP1Q+j4awMKHy5CFu1GSapR99D45ff8LFllRvzk2myTWKVI2CEuqHyufREBYmVJ48xI2aTLP0o+/B8etPuNiS6s25yTS5RpGqUVBC/VD5PBrCwoTKk4e4UZNpln5Ed3xD+dyEEtq2ffHqsvXy5Xqol6GqPGr98OpyNZgzTLjYkguTvHhx4FhW94P7w1LIfetYXWv482ub4IAzjWFfve86nhbIOthTPXmM3NtuOFvPtIbXtsHMNIax353gRZ/0tvrLuHdszuarWTcXqVIlCS8GjhZT97biiO6d4yUmfG1nE15aib+vac7xXpUZ3f1ucr5a9yNMOK3aFGBQqc5ddRH3hg45X637KU7USmaa9UEKMECsbKW+uUsvSIj42aBlGnvfBD4hqNSbyyoyuvdkhc7WhOb4xhXlMzTPunujmoeUezqE1yNYkVsbJrSPoDWfrvy9aiJCbx669Nlaq0aMcLElL2hLGMocVqtSj6yMyTof7dg+nA/tT7RVn8izritTqe6plj5D43Mdxs/S+XLaB/Rln6gyleq+yKq2yVQvDcDx7cxvSyhzcFqJSj3IqtCJrDsbIMzchpG87oPySnXfeoxaC+T8O0W4smJ8Zn5nwm/OkWrAW/ZCBNUW+EU607zCEGqmprJS3b1j5l6azHIfyjQ4wrBSlSG6dya7QmOEhOMjCYNKfa8KMNVICCLUTE9FY+xeAo0EhnBujXjCwG9eSEd0r8FGIpMwmWmM1xyE4RWOZEZaIwHK+9kGMg0XoWZKvcLJaCQgDbZ2IcfnI5R6heM+cM3tXWe7FEKJVziZjQQACBHy7sOJPEdGYxw0EvgjJqjQTmdCmDvTJCWhUtmNRELvOhPCnwpkmqSCShVMyG4kYhocduKEuR0/Ls8SedmIaiQWihawZMKgUveFIQaNBA/gYQckzJVpEnIEXeFgG4mpBp0OSVgk0yQk5gqHfCLB0LtOnHC3eKZJqntf+iriWt2ZBocdgrAMx4+r7CscF3oiQVdiAcUQho+1SqzUoJHg+dqHHTZhoX0YySrxspGrkRiQfJyZhqMpK6lS3dMBTyNBVihvpvEO8PvB634qoVIzn0ikvmS6Qnkd33x45tjzZVw2cjQSnvX041Zhwhdra/v4+4Oil41BI4GvUG/w5WSHTcjINAFhe+0Xji9b6AqHq5Gwft3UNzMJUZkmJGy3147wy2gd5CfkaCQ878uJTiXkyDQRYXvt0UQvY97LRq5GwvlTD0UnRDv+lLC91ub4/nY/5DhTeWKaZ/52UjZhwPiAr1SH+32xoJHAfweDBdzUOQkZ+zBCfL5BVyrvFQ5PI+E5X6d8uH3IyDQxwoDxFr+MXFc4+CcS4RsFv88BUWcp2w/bMcRnfKDCXzbyPJHQnKcTXUcSYh2/HdcaPhRjK/XNI0eiGPx3UxdLGNg//kzHXeFwNBLOr5sJQBQhItOQeo8+9ZwbVqUGjQS6Qj3ty4mucxByZBpiGR/QBx/rstH9hG4kPOcPfVNPEW4wz1K0H8YRfbx5ZTXGLkcjYWq/kQuYSZjD8ZOM/8FPjXrZyNNImH+mF7DsTEMg4ttG2mVj0EjgK/QrxFd2piEZ8S4Nvi+2hw+6zvHvMGDpmYb0DXSRpa9w3LfoZsUzdyl8AjINyYg/KIgrHI4nEs6QtoAZJ00Rx08iPiJf4Ule4bjxn5Fgfd4TcITKI+RpGxeV6sJvoEPyiJTGV6W5M02SEf8WwfTNRo5GwiJTWp59mCPTEIjP6Idg4ftiHI0EkNKwhEUzDcmIPjY87RTfSFhASsMTFnb8JOIv2LbRc9AL6EEpLU0oKrWRiGv3BZ/rkHLglJafsMA+nC0j2jcQoqY0fJWWkWlI4dtGlsybDJNHEZaVaYhlxLeNmfKsJySfmFuMLESf6+UJisirmCoRcrWNNGWntDQhO7UVzTQE4jPXi6DpL8ezgEzCkjINycjxtDElZkrDEpacaQhEnqeNCUUPzEoiLNnxCfG98ToT0uQrQcjRNs41f2AmiLC8fRgh8jxtnC4g1uSRhCIyTZKR42njJKXlWMAMQjGZhkDkeEsFn9L4CAU4fpIR+bTRc/AprVqEyLaR1+S5CcvNNCQju20M34rJLxWZhkB8zH7aiLiKyUUoNNMQiJlto/UHZ0rDE4p1/CQj1TdwVzHZhD9WgLDdprSNeVJa/jUUtQ+ny/gh/d/Ol9LwhMIzDYGYahtN6gMzPkJKlcrINCRj8irf2S14xMwI1Tp+EjHWNppZD8yWlnDxtLFISksRZlaphExDID6G141BSivhiEERysg0BGLQNjqFUlqKkFKl/5KXaUjGr8VSGp5QquMv5PfbfpmA1CpVRXjWC//ZL5MQvYYy9qHf96cDGYSSM02o3tliXNoyqrynITVbwEjjsggRfiiHsNcn/2RUL8L+GICWRSgh04xTCziRX8IyViPT9Hu0j5wJI5SZafxR1gfFEUpz/P4Z4+NLTuiPfNZfKeYbeEIx+/AMPmIIFVlGzD4Ul2n8EeARkAr4htJ7mrTJ05XbN1Q6/ojqEZDy+oY6wl6WR0DKaf/KMg3LIyDlWkZFmWbM9ghIeexfTabpcxwxxGeWSCjO8REmTxe3/SsgzL+AkTgPHOmZBm3ydPHZv+xMc8brEaB4llFypuEzebo4fEOq43ObPF1435BJOMph8nRhfUNepukV8QhISN+QlmlGBT0CEmoZJWWasV7YIyBhfEOO4/fLO2IIsX1DBqEvZgEjMZdRQqYRt4ATsXxDeKbx9ZJMnq5s+xedacpJaQxlLqNgx9dLNXm6MnxDKGFP9+UAZtm/yEwjwuTpovmGuEwjyOTpovgGT6ZZv+IgHMk4YsivyUP4Ff/bkCDCsXiPgAT5Bo3wG0RoQ4AQYX9TBV8b9A0K4fk/QKZZse+h17FThL4sj4CU8g0a4ZUBZJoW+P9fJgn78jwCEukbNELK77BkE/q6VI+A1EcQbvy1+IWyid/weAv8DE+C8Ey2R0DqsQmDgwYkNFaBH4yIE6pfwEgjFuE55XdYrtrATlwQ9qqwgJF62YTbuzb193Ifpep0TqjC5KmaP22ECLe2YkRxP5zAHpN1OiXsqTF5us7ohH9fxIlIwhb5AzwR4UhXTZSSTyHcOL9qZRLa98n/X1BIOFZp8nT1AcKN852LFkg4r9oV+7UWP1IDQsUmT9eYINzY/nvn8+yXHUOZZn7yXA+7zuwHI82PmxXxCEgjPSDc2trY3t4+P9/e+XaZPEFTmWZRqlcfj4amFcjpPlXGIyCNd843Dv/310+73/65sG2b4CAdP/aR9dnfDv49/7P19eqNDHs203DyKQ46YY1GiUxTyxGRaeo4ilSNghIzagiXfzQlXGSa2o2gTFOzUf39sCFc9lGTaWowilSNghLqh8rn0RAWJlSePMSNmkyz9KPvwfHrT7jYkurNuck0uUaRqlFQQv1Q+TwawsKEypOHuFGTaZZ+9D04fv0JF1tSvTk3mSbXKFI1CkqoHyqfR0NYlHBxoNZv9H/k8vHhmzTxuwAAAABJRU5ErkJggg=="
                  className="img"
                />
              </div>
              <div className="contact-info">
                <h1>Email</h1>
                <a
                  href="mailto:nguyentientai10@gmail.com"
                  className="contact-phone"
                >
                  <h2>nguyentientai10@gmail.com</h2>
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <img
                  src="https://e7.pngegg.com/pngimages/758/288/png-clipart-address-sk-yevroal-yans-email-logo-ip-miscellaneous-blue-thumbnail.png"
                  className="img"
                />
              </div>
              <div className="contact-info">
                <h1>Address</h1>
                <h2>Huyện Vạn Ninh,Tỉnh Khánh Hòa </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
      {/* Footer */}
      <section id="footer">
        <div className="footer container11">
          <div className="brand">
            <h1>
              <span>D</span>ev <span>W</span>eb
            </h1>
          </div>
          <h2>Mang đến cho khách hàng cảm giác thoải mái nhất 😍</h2>
          <div className="social-icon">
            <div className="social-item">
              <a
                href="https://www.facebook.com/profile.php?id=100006139249437"
                target="_blank"
                className="a"
              >
                <img
                  src="https://banner2.cleanpng.com/20180713/huy/kisspng-computer-icons-facebook-logo-flattened-vector-5b49543a00dfc6.5299092815315323460036.jpg"
                  className="img"
                />
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://www.instagram.com/nguyentientai10/"
                target="_blank"
                className="a"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  className="img"
                />
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://twitter.com/tientai_heo"
                target="_blank"
                className="a"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  className="img"
                />
              </a>
            </div>
            <div className="social-item">
              <a href="mailto:nguyentientai10@gmail.com" className="a">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img"
                />
              </a>
            </div>
          </div>
          <p className="p">© 2020-2021 Tiến Tài Manager company DevWeb </p>
        </div>
      </section>
      <BackToTop />
    </div>
  );
};

export default TeamWord;
