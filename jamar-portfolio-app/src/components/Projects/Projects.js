import React from "react";
// import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import List from "@material-ui/core/List";

const styles = theme => ({
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
    paddingTop: "55.50%" 
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
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  }
});

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModal1: false
      }
    };

    openModal = () => {
      this.setState({
        showModal: true});
    };


  closeModal = () => {
    this.setState({ showModal: false});
  };

  openModal1 = () => {
    this.setState({ showModal1: true});
  };


closeModal1 = () => {
  this.setState({ showModal1: false });
};
  
render(){
  const { classes } = this.props;
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
                {/* <Grid item> */}
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.mainButton}
                    href="https://github.com/jrizza88"
                  >
                    GitHub Page
                  </Button>
                {/* </Grid> */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={6}>

             <Grid item xs={12} sm={6} md={4} className={classes.grid}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require("../../assets/projectBirthday.png")}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Project Birthday
                  </Typography>
                  <Typography>Information based application for social justice, VPN and Password Management awareness. </Typography>
                  <Typography>Built with React, SCSS, and React Modal</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://projectbirthday.world/"
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/jrizza88/ProjectBirthday/"
                  >
                    GitHub
                  </Button>
                  <Dialog
              open={this.state.showModal}
              onClose={this.closeModal}
              aria-labelledby="form-dialog-title"
              PaperProps={{
                style: {
                  minWidth: "300px"
                }
              }}
            >
      <DialogContent classes={{ root: classes.dialogBox }} dividers>
              <DialogContentText classes={{ root: classes.exer }}>
        <div>
        <div>Project Birthday Tech Stack</div>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Front End
          </Typography>
          <div className={classes.demo}>
            <List>
             <li>React.js</li>
             <li>Sass</li>
             <li>Material UI</li>
             <li>React Awesome Slider</li>
            </List>
          </div>
        </Grid>
      </Grid>
              </div>
              </DialogContentText>
              
            </DialogContent>
            </Dialog> 
                  <Button
                    size="small"
                    color="primary"
                    type="submit"
                    onClick={this.openModal}
                  >
                    Tech Stack
                  </Button> 
               
                        
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className={classes.grid}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require("../../assets/HelloMelon.png")}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hello Melon!
                  </Typography>
                  <Typography>Nutrition Tracking application for logging food entries with a coach feature for accountability.</Typography>
                  <Typography>Built with React, GraphQl, MaterialUI, Styled Components, Sqlite3, Knex and more.</Typography>
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
                  <Dialog
              open={this.state.showModal1}
              onClose={this.closeModal1}
              aria-labelledby="form-dialog-title"
              PaperProps={{
                style: {
                  minWidth: "300px"
                }
              }}
            >
            <DialogContent classes={{ root: classes.dialogBox }} dividers>
              <DialogContentText classes={{ root: classes.exer }}>
        <div>
        <div>Hello Melon Tech Stack</div>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Front End
          </Typography>
          <div className={classes.demo}>
            <List>
             <li>React.js</li>
             <li>GraphQl</li>
             <li>Material UI</li>
             <li>Styled Components</li>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Backend
          </Typography>
          <div className={classes.demo}>
            <List>
             <li>Node.js</li>
             <li>GraphQl</li>
             <li>Sql</li>
             <li>Knex</li>
            </List>
          </div>
      </Grid>
    
      </Grid>
              </div>
              </DialogContentText>
              
            </DialogContent>
            </Dialog> 
                  <Button
                    size="small"
                    color="primary"
                    type="submit"
                    onClick={this.openModal1}
                  >
                    Tech Stack
                  </Button> 
               
                        
                </CardActions>
              </Card>
            </Grid>

   

            <Grid item xs={12} sm={6} md={4} className={classes.grid}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require("../../assets/UI.png")}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    User Interface Project
                  </Typography>
                  <Typography>User Interface project designed to reflect a client's request for a porfolio website.</Typography>
                  <Typography>Built with JavaScript and CSS LESS</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://protected-savannah-41015.herokuapp.com/"
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/jrizza88/User-Interface-Project-Week"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>


            <Grid item xs={12} sm={6} md={4} className={classes.grid}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={require("../../assets/backendExpat.png")}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Expat
                  </Typography>
                  <Typography>Backend database project to support the future front end application.</Typography>
                  <Typography>Built with Node.js, Axios, Knex, Sqlite3, Postgres, Express, Jsonwebtoken and Bcrypt</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/expatjournal-pt-042219/bw-pt-expatJournal-BE"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
  }
};



export default withStyles(styles)(Projects);





