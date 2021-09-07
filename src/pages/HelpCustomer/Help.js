import React, { useState, useEffect } from "react";
import "./responsive.css";
import "./Help.css";
import "./grid.css";
import "./lightslider.css";
import logo from "../../Images/logo1.png";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import register1 from "./Image/register.jpg";
import register2 from "./Image/register2.jpg";
import register3 from "./Image/register3.jpg";
import register4 from "./Image/register4.jpg";
import login1 from "./Image/login0.5.jpg";
import login2 from "./Image/login0.75.jpg";
import login3 from "./Image/login1.jpg";
import login4 from "./Image/login2.jpg";
import forget1 from "./Image/forget1.jpg";
import forget2 from "./Image/forget2.jpg";
import forget3 from "./Image/forget3.jpg";
import forget4 from "./Image/forget4.jpg";
import forget5 from "./Image/forget5.jpg";
import forget6 from "./Image/forget6.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,

    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const Help = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [Time, setTime] = useState(() => new Date(Date.now()));
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="html">
      {/* about*/}
      <section id="about">
        <div className="grid wide">
          <div className="about-content">
            <div className="about-heading" data-aos="fade-up">
              <h2 className="about-header">Help Customer Company Dev-Web</h2>
              <span className="about-title">
                Help customer Login,Register,Forgot 😁
              </span>
            </div>
            <div className="about-space" />
            <div className="about-desc" data-aos="fade-up">
              <p className="about-text">
                Chào mừng bạn đến help Company Dev-Web với giúp đỡ của tôi,tôi
                là tài sau đây là những bước đơn giản để giúp bạn có thể đăng
                nhập và mua hàng một cách tốt nhất,nào chúng ta cùng bắt đầu 😉
              </p>
              <p className="about-text">
                Các bạn làm theo chỉ dẫn của tôi nhé !
              </p>
            </div>
            <div className="about-counter" data-aos="fade-up">
              <div className="about-line" />
              <div className="about-space" />
              <h2 className="about-subtitle">READY</h2>
              <div className="about-space" />
              <div className="about-counter-number" data-target={12}></div>
              <div className="about-space" />
              <h2 className="about-subtitle">Product Dev Web</h2>
            </div>
          </div>
        </div>
      </section>
      {/* cart */}

      <section className="demos">
        <div className="grid wide container">
          <div className="row no-gutters">
            <div className="col l-4 m-4 c-4">
              <div className="column">
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        B1
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Đây là bước 1:👈"
                    subheader="Today "
                  />
                  <CardMedia
                    className={classes.media}
                    image={register1}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      👉 Nơi này để tạo tài khoản bạn bấm vào nơi đã chỉ
                      dẫn,hoặc bạn có thể đăng nhập bằng gmail của bạn (nếu có).
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </div>
            <div className="col l-4 m-4 c-4">
              <div className="column">
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        B2
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Đây là bước 2:👈"
                    subheader="Today "
                  />
                  <CardMedia
                    className={classes.media}
                    image={register2}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      👉 Bạn Đăng ký không được trùng tên với account trước,và
                      mật khẩu phải đúng các kí tự nêu trên,nhập lại mật khẩu
                      phải khớp.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </div>

            <div className="col l-4 m-4 c-4">
              <div className="column">
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        B3
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Đây là bước 3:👈"
                    subheader="Today "
                  />
                  <CardMedia
                    className={classes.media}
                    image={register3}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      👉 Khi bạn điền form hoàn thành,bạn hãy bấm nút Sign In để
                      tạo tài khoản,bạn chờ trong giây lát để hoàn thành việc
                      đăng ký
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* purchase */}
      <section id="purchase">
        <div className="grid wide">
          <div className="purchase-bg" data-aos="fade-up">
            <div className="purchase-overlay" />
            <div className="purchase-content">
              <h2 className="purchase-heading">
                <span className="text-primary">PURCHASE</span>
                Company Dev-Web
                <br />
                <span className="text-primary">AND BUILD</span>
                EXCITEMENT AROUND
                <span className="text-primary"> YOUR BRAND</span>
              </h2>
              <span className="purchase-title">STYLE IS EVERYTHING</span>
              <div className="purchase-space" />
              <div className="purchase-btn">
                <a href="#" className="purchase-link">
                  COMPUTER
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <div className="footer-logo" data-aos="fade-right">
          <div className="footer-space" />
          <img src={logo} alt="" className="footer-img" />
          <div className="footer-text">
            <span className="footer-title">
              TIẾN TÀI © MANAGER COMPANY DEV-WEB.
            </span>
          </div>
          <div className="footer-space" />
        </div>
      </footer>
      <button className="goTop fas fa-chevron-up" />
    </div>
  );
};

export default Help;
