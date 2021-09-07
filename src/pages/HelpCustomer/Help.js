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
import login1 from "./Image/login0.5.jpg";
import BackToTop from "../../components/BackToTop/BackToTop";
import login3 from "./Image/login1.jpg";
import login4 from "./Image/login2.jpg";
import forget1 from "./Image/forget1.jpg";
import forget2 from "./Image/forget2.jpg";
import forget3 from "./Image/forget3.jpg";
import forget4 from "./Image/forget4.jpg";
import forget5 from "./Image/forget5.jpg";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 345,

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
  root1: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: 30,
  },
  paper: {
    padding: theme.spacing(4),

    color: theme.palette.text.primary,
  },
}));
const Help = () => {
  const classes = useStyles();
  const [header, setHeader] = useState(false);
  const toggleLove = () => {
    setHeader(!header);
  };
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
      <BackToTop />
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
                Chào mừng bạn đến help Company Dev-Web với sự giúp đỡ của
                tôi,tôi là tài sau đây là những bước đơn giản để giúp bạn có thể
                đăng nhập và mua hàng một cách tốt nhất,nào chúng ta cùng bắt
                đầu 😉
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

      <section className="demos ">
        <div className={classes.root1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h1 className={classes.paper1}>Cách đăng ký Register 😉</h1>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root} className={classes.paper}>
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
                    👉 Nơi này để tạo tài khoản bạn bấm vào nơi đã chỉ dẫn,hoặc
                    bạn có thể đăng nhập bằng gmail của bạn (nếu có) bạn nhé.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root} className={classes.paper}>
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
                    👉 Bạn Đăng ký không được trùng tên với account trước,và mật
                    khẩu phải đúng các kí tự nêu trên,nhập lại mật khẩu phải
                    khớp.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root} className={classes.paper}>
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
                    tạo tài khoản,bạn chờ trong giây lát để hoàn thành việc đăng
                    ký
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
      {/* login */}
      <section className="demos ">
        <div className={classes.root1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h1 className={classes.paper1}>
                Cách đăng nhập Tài khoản và xác mình tài khoản Google 😆
              </h1>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root} className={classes.paper}>
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
                  image={login1}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    👉 Nơi này để đăng nhâp tài khoản bạn bấm vào Sign In,hoặc
                    bạn có thể đăng nhập bằng gmail của bạn (nếu có) bạn nhé.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root} className={classes.paper}>
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
                  image={login4}
                  title="Paella dish"
                  id="image-error"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    👉 Đây là giao diện khi bạn đăng nhập thành công,và bạn bắt
                    đầu với trải nghiệm của mình nhé,cảm ơn bạn ♥
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root} className={classes.paper}>
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
                  image={login3}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    👉 Nơi bạn có thể login bằng cách không cần đăng nhập,chỉ
                    cần nhấp vào Login Google bạn xác mình tài khoản là bạn có
                    thể login,đơn giản phải không nào 😃
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root} className={classes.paper}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      B4
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Đây là bước 4:👈"
                  subheader="Today "
                />
                <CardMedia
                  className={classes.media}
                  image={login4}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    👉 Khi bạn đăng nhập xong giao diện sẽ hiện ra như thế
                    này,bạn có thể thoải mái tận hưởng được chúc bạn sức khỏe
                    dồi dào nhé ♥
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
      {/* Forgot */}
      <section className="demos ">
        <div className={classes.root1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h1 className={classes.paper1}>
                Cách lấy lại mật khẩu khi bạn bị quên mất,không sao tôi có thể
                giúp bạn 😍
              </h1>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root} className={classes.paper}>
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
                  image={forget2}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    👉 Nơi này là giao diện để tìm lại mật khẩu của bạn bằng
                    chính Email mà mà bạn tạo bằng Google nha.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root} className={classes.paper}>
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
                  image={forget1}
                  title="Paella dish"
                  id="image-error"
                />
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root} className={classes.paper}>
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
                  image={forget3}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    👉 Khi có thông báo bạn vào Email và hãy đọc kĩ Email của
                    Admin viết cho bạn và nhấp vào link được gửi.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root} className={classes.paper}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      B4
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Đây là bước 4:👈"
                  subheader="Today "
                />
                <CardMedia
                  className={classes.media}
                  image={forget4}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    👉 Khi bạn nhấp vào rồi thì hãy đổi mật khẩu tùy thích của
                    bạn vào đó,rồi nhấn Save.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root} className={classes.paper}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      B5
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Đây là bước 5:👈"
                  subheader="Today "
                />
                <CardMedia
                  className={classes.media}
                  image={forget5}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    👉 Giao diện thành công hiện lên bạn có thể bấm continue
                    hoặc không bấm cũng được mật khẩu của bạn đã được đổi!
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root} className={classes.paper}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      B6
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Đây là bước 6:👈"
                  subheader="Today "
                />
                <CardMedia
                  className={classes.media}
                  image={login4}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    👉 Và đây là giao diện khi bạn vừa login vào,vậy là xong bạn
                    đã tìm được tài khoản mà bạn quên 😚.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={toggleLove}>
                  {header ? (
                    <IconButton aria-label="add to favorites" color="secondary">
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  )}

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
      {/* purchase */}
      <section id="purchase">
        <div className="grid wide">
          <div className="purchase-bg" data-aos="fade-up">
            <div className="purchase-overlay" />
            <div className="purchase-content">
              <h2 className="purchase-heading">
                <span className="text-primary">TAI HEO </span>
                Company Dev-Web
                <br />
                <span className="text-primary">AND BUILD</span>
                EXCITEMENT AROUND
                <span className="text-primary"> YOUR BRAND</span>
              </h2>
              <span className="purchase-title">STYLE IS EVERYTHING</span>
              <div className="purchase-space" />
              <div className="purchase-btn">
                <Link to="/login" className="purchase-link">
                  <strong>LOGIN SHOP DEVWEB ♥</strong>
                </Link>
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
