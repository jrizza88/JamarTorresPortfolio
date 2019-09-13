import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  grid: {
    paddingBottom: 20
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: 10
  },
  cardMedia: {
    // paddingTop: "56.25%" // 16:9
    paddingTop: "65%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  mainButton: {
    background: "#b0b0e3",
    "&:hover": {
      background: "#102542",
      color: "#fff"
    }
  },
  pageMargin: {
    marginBottom: "10%"
  }
  // footer: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(6)
  // }
}));

const cards = [1, 2, 3, 4, 5, 6];
const Projects = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Projects
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Below, you can find an array of projects worked on, ranging from
              React, Vanilla JS and backend based projects. Click on the links
              to view the projects directly, or github to view the repos!
              {/* short so folks don&apos;t simply skip over it entirely. */}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.mainButton}
                  >
                    GitHub Page
                  </Button>
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {/* {cards.map(card => ( */}
            {/* <Grid item key={card} xs={12} sm={6} md={4}> */}
            <Grid xs={12} sm={6} md={4} className={classes.grid}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require("../../assets/HelloMelon.PNG")}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hello Melon!
                  </Typography>
                  <Typography>Nutrition Tracking application</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://hello-melon-lambda.netlify.com/"
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/labspt3-nutrition-tracker"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4} className={classes.grid}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require("../../assets/LambdaNotesJamar.PNG")}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lambda Notes
                  </Typography>
                  <Typography>React.Js frontend based application</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://jamar-notes.netlify.com"
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/jrizza88/front-end-project-week"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4} className={classes.grid}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* ) */}
            {/* )
            } */}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/*
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        {/* <Copyright /> */}
      {/* </footer>
       */}
      {/* End footer */}
    </React.Fragment>
  );
};
export default Projects;
