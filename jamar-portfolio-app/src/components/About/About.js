import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "white"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  paper: {
    margin: "10%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  paper_headline: {
    margin: "5%",
    padding: theme.spacing(2),
    textAlign: "center"
  },
  background: {
    backgroundColor: "#fafafa",
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Who am I?
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Find out below!
            </Typography>

          </Container>
        </div>
        <Grid container spacing={2} className={classes.background}>
        <AboutContainer>
          <AboutMiniContainer>
            <AboutDivs>
              <AboutMiniHeadline>Jamar as a developer</AboutMiniHeadline>
              Jamar is a passionate web developer with a strong interest in
              product management. He enjoys creating interactive and intuitive
              experiences. He believes having a strong front-end is central to
              any idea and product. He is most excited to create and see a project through. 
              He looks forward into help you create meaningful web applications. Resilience is
              key to Jamar, and he never gives up until he solves a problem.
              Whether this is through web development or life in general, he is
              always willing to take on different approaches.
            </AboutDivs>
            <AboutDivs>
              <AboutMiniHeadline>More about Jamar!</AboutMiniHeadline>
              Jamar Torres was born in Boston, MA. He graduated at Northeastern
              University with a BA in International Affairs. Jamar has extensive
              experience in international issues, travel and cultural
              understanding. He has completed a social enterprise program in
              India, spent time in the education field in Turkey, completed a
              dialogue program geared toward diplomacy and has worked for a
              student exchange program. Jamar currently works at the United
              Nations and recently completed an immersive web
              development and computer science program at Lambda School.
              Currently, Jamar is looking to transition into the world of software
              to jumpstart his career transition.
            </AboutDivs>
          </AboutMiniContainer>
        </AboutContainer>
      </Grid>
    </div>
  );
};

const AboutContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const AboutMiniContainer = styled.section`
  display: flex;
  background: #F8F9F9;
  flex-direction: column;
  // margin: 5%;
  padding: 5%;
`;



// const AboutHeadline = styled.h1`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   padding-top: 10px;
//   font-size: 2rem;
// `;

const AboutMiniHeadline = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 10px;
  text-decoration: underline;
  text-decoration-color: #b0b0e3;
  font-size: 2.5rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  
`;

const AboutDivs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  font-size: 1.7rem;
  margin-top: -10%;
`;

export default About;
