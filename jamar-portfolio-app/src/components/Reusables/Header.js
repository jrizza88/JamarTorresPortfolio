import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Posts from "../Posts/Posts";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      background: "mediumpurple",
      color: "#fff",
      textDecoration: "none",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    mainTitle: {
      flexGrow: 1,
      fontSize: 24,
      color: "#fff"
    },
    title: {
      flexGrow: 1,
      fontSize: 16,
      color: "#fff"
    },
    a: {
      textDecoration: "none",
    },
    toolbar: {
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    toolbarMobile: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between"
      }
    }
  }));

  const Header = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            
                <Typography variant="h6" className={classes.mainTitle}>
                <NavLink to ="/" component={Home} className={classes.a} style={{ color: 'whiteSmoke' }}>Jamar Torres</NavLink>
                </Typography>
           
            <NavLink to="/About" component={About} className={classes.a}><Button className={classes.title}>About</Button></NavLink>
            <NavLink to="/Projects" component={Projects} className={classes.a}><Button color="inherit" className={classes.title}>Projects</Button></NavLink>
            <NavLink to="/Resume" component={Resume} className={classes.a}><Button color="inherit" className={classes.title}>Resume</Button></NavLink>
            <NavLink to="/Posts" component={Posts} className={classes.a}><Button color="inherit" className={classes.title}>Posts</Button></NavLink>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default Header;