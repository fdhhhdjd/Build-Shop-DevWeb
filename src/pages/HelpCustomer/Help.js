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
                Help customer Login,Register,Forgot ????
              </span>
            </div>
            <div className="about-space" />
            <div className="about-desc" data-aos="fade-up">
              <p className="about-text">
                Ch??o m???ng b???n ?????n help Company Dev-Web v???i s??? gi??p ????? c???a
                t??i,t??i l?? t??i sau ????y l?? nh???ng b?????c ????n gi???n ????? gi??p b???n c?? th???
                ????ng nh???p v?? mua h??ng m???t c??ch t???t nh???t,n??o ch??ng ta c??ng b???t
                ?????u ????
              </p>
              <p className="about-text">
                C??c b???n l??m theo ch??? d???n c???a t??i nh?? !
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
              <h1 className={classes.paper1}>C??ch ????ng k?? Register ????</h1>
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
                  title="????y l?? b?????c 1:????"
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
                    ???? N??i n??y ????? t???o t??i kho???n b???n b???m v??o n??i ???? ch??? d???n,ho???c
                    b???n c?? th??? ????ng nh???p b???ng gmail c???a b???n (n???u c??) b???n nh??.
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
                  title="????y l?? b?????c 2:????"
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
                    ???? B???n ????ng k?? kh??ng ???????c tr??ng t??n v???i account tr?????c,v?? m???t
                    kh???u ph???i ????ng c??c k?? t??? n??u tr??n,nh???p l???i m???t kh???u ph???i
                    kh???p.
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
                  title="????y l?? b?????c 3:????"
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
                    ???? Khi b???n ??i???n form ho??n th??nh,b???n h??y b???m n??t Sign In ?????
                    t???o t??i kho???n,b???n ch??? trong gi??y l??t ????? ho??n th??nh vi???c ????ng
                    k??
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
                C??ch ????ng nh???p T??i kho???n v?? x??c m??nh t??i kho???n Google ????
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
                  title="????y l?? b?????c 1:????"
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
                    ???? N??i n??y ????? ????ng nh??p t??i kho???n b???n b???m v??o Sign In,ho???c
                    b???n c?? th??? ????ng nh???p b???ng gmail c???a b???n (n???u c??) b???n nh??.
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
                  title="????y l?? b?????c 2:????"
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
                    ???? ????y l?? giao di???n khi b???n ????ng nh???p th??nh c??ng,v?? b???n b???t
                    ?????u v???i tr???i nghi???m c???a m??nh nh??,c???m ??n b???n ???
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
                  title="????y l?? b?????c 3:????"
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
                    ???? N??i b???n c?? th??? login b???ng c??ch kh??ng c???n ????ng nh???p,ch???
                    c???n nh???p v??o Login Google b???n x??c m??nh t??i kho???n l?? b???n c??
                    th??? login,????n gi???n ph???i kh??ng n??o ????
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
                  title="????y l?? b?????c 4:????"
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
                    ???? Khi b???n ????ng nh???p xong giao di???n s??? hi???n ra nh?? th???
                    n??y,b???n c?? th??? tho???i m??i t???n h?????ng ???????c ch??c b???n s???c kh???e
                    d???i d??o nh?? ???
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
                C??ch l???y l???i m???t kh???u khi b???n b??? qu??n m???t,kh??ng sao t??i c?? th???
                gi??p b???n ????
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
                  title="????y l?? b?????c 1:????"
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
                    ???? N??i n??y l?? giao di???n ????? t??m l???i m???t kh???u c???a b???n b???ng
                    ch??nh Email m?? m?? b???n t???o b???ng Google nha.
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
                  title="????y l?? b?????c 2:????"
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
                  title="????y l?? b?????c 3:????"
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
                    ???? Khi c?? th??ng b??o b???n v??o Email v?? h??y ?????c k?? Email c???a
                    Admin vi???t cho b???n v?? nh???p v??o link ???????c g???i.
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
                  title="????y l?? b?????c 4:????"
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
                    ???? Khi b???n nh???p v??o r???i th?? h??y ?????i m???t kh???u t??y th??ch c???a
                    b???n v??o ????,r???i nh???n Save.
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
                  title="????y l?? b?????c 5:????"
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
                    ???? Giao di???n th??nh c??ng hi???n l??n b???n c?? th??? b???m continue
                    ho???c kh??ng b???m c??ng ???????c m???t kh???u c???a b???n ???? ???????c ?????i!
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
                  title="????y l?? b?????c 6:????"
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
                    ???? V?? ????y l?? giao di???n khi b???n v???a login v??o,v???y l?? xong b???n
                    ???? t??m ???????c t??i kho???n m?? b???n qu??n ????.
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
                  <strong>LOGIN SHOP DEVWEB ???</strong>
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
              TI???N T??I ?? MANAGER COMPANY DEV-WEB.
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
