import React from "react";
import styled from "styled-components";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Posts from "../Posts/Posts";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const Header = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            
                <Typography variant="h6" className={classes.title}>
                <NavLink to ="/" component={Home}>Jamar Torres</NavLink>
                </Typography>
           
            <NavLink to="/About" component={About}><Button color="inherit">About</Button></NavLink>
            <NavLink to="/Projects" component={Projects}><Button color="inherit">Projects</Button></NavLink>
            <NavLink to="/Resume" component={Resume}><Button color="inherit">Resume</Button></NavLink>
            <NavLink to="/About" component={About}><Button color="inherit">Posts</Button></NavLink>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default Header;