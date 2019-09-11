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

const useStyles = makeStyles(theme => ({
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
            If you would like to get in contact with me, you can email me at jamar@inc.sh
            </div>
          </Typography>
          <Typography
            variant="h4"
            align="start"
            color="textPrimary"
            gutterBottom
          >
            Links
          </Typography>
          <Grid container spacing={2} justify="center" className={classes.background}>
            <SocialDiv>
              <li>LinkedIn</li>
              <li>Github</li>
              <li>Twitter</li>
            </SocialDiv>
          </Grid>
        </Container>
      </div>
      </main>
      </React.Fragment>
      </div>
    );
};

const SocialDiv = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  // justify-content: flex-end;
  width: 100%;
  position: static;
  padding-top: 4.5%
  padding-left: 2.3%;
  padding-bottom: 4%;
  // left: 0;
  // bottom: 0;
  // right: 0;
`;

export default Contact;