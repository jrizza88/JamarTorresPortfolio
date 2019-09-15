import React from 'react';
import styled from "styled-components";
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
import email from "../../assets/Email.png";
import github from "../../assets/github-sign.png";
import linkedin from "../../assets/linkedin-sign.png";
import nyc from "../../assets/nyc.png";

const ContactDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ImageCon = styled.div`
  width: 100%;
  mad-width: 200px;
  .icon {
    border: none;
    width: 100px;
    max-width: 100px;
    border-radius: 0;
    margin: 10px;
  }
`;

const SocialDiv = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  width: 100%;
  position: static;
  padding-top: 4.5%
  padding-left: 2.3%;
  padding-bottom: 4%;
`;

const CityContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  width: 100%;
  position: static;
`;
const CityImg = styled.img`
  width: 100%;
  height: 55vh;
  // position: static;
  object-fit: cover;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "white",
  },
    icon: {
      marginRight: theme.spacing(2)
    },
    background: {
      backgroundColor: "#fafafa",
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },
    cardContent: {
      flexGrow: 1
    },
    contact: {
      display: "flex",
      justifyItems: "center",
      justifyContent: "center",
      alignItems: "space-evenly"
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
    desc: {
      fontSize: 20,
      // padding: "0 20px 20px 20px",
      textAlign: "center"
    },
    cityDiv: {
      marginTop: "3%"
    }
  }));

const Contact = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
    <React.Fragment>
    <CssBaseline />
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Contact Me
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            <div className={classes.contact}>
            Get in touch with me. There's more than one way!
            </div>
          </Typography>
          <Grid container spacing={2} justify="center" className={classes.background}>
            <SocialDiv>
            <ContactDiv>
              <div>
              <a target="_blank"    rel="noopener noreferrer" href="mailto:jamar@inc.sh">
                <ImageCon>
                  <img className="icon" src={email} alt="email icon" />
                </ImageCon>
              </a>
                <Typography className={classes.desc}>jamar@inc.sh</Typography>
              </div>
              <div>
              <a target="_blank"    rel="noopener noreferrer" href="https://github.com/jrizza88">
                <ImageCon>
                  <img className="icon" src={github} alt="GitHub icon" />
                </ImageCon>
              </a>
              <Typography className={classes.desc}>@jrizza88</Typography>
              </div>
              <div>
              <a target="_blank"    rel="noopener noreferrer" href="https://www.linkedin.com/in/jamartorres/">
                <ImageCon>
                  <img className="icon" src={linkedin} alt="LinkedIn icon" />
                </ImageCon>
              </a>
              <Typography className={classes.desc}>jamartorres</Typography>
              </div>
            </ContactDiv>
            </SocialDiv>
          </Grid>
          <Grid container spacing={2} justify="center"  className={classes.cityDiv}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            <div className={classes.contact}>
            Currently located in New York City
            </div>
          </Typography>
          <CityContainer>
              <CityImg
              src={require("../../assets/nyc.png")}
              alt="profilePhoto"
            />
          </CityContainer>
          </Grid>
        </Container>
      </div>
      </main>
      </React.Fragment>
      </div>
    );
};


export default Contact;