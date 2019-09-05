import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
// import Resume from "../Resume/Resume";
// import Posts from "../Posts/Posts";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: 0,
      // background: "#4A4063",
      position: "static",
      background: "#102542",
      color: "#fff",
      textDecoration: "none",
    },
    sideNav: {
      background: "orange"
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
    titleMobile: {
      flexGrow: 1,
      fontSize: 16,
      color: "black"
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
      justifyContent: "space-evenly",
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between"
      },
      fontSize: 16
    },
    mobileMenu: {
      fontSize: 16
    }
  }));

  const Header = () => {
    const classes = useStyles();
    // const { classes } = props;
  
    const [state, setState] = React.useState({
      right: false
    });
  
    const toggleDrawer = (side, open) => event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.toolbar}>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            
                <Typography variant="h6" className={classes.mainTitle}>
                <NavLink to ="/" component={Home} className={classes.a} style={{ color: 'whiteSmoke' }}>Jamar Torres</NavLink>
                </Typography>
           
            <NavLink to="/About" component={About} className={classes.a}><Button className={classes.title}>About</Button></NavLink>
            <NavLink to="/Projects" component={Projects} className={classes.a}><Button color="inherit" className={classes.title}>Projects</Button></NavLink>
            <NavLink to="/Contact" component={Contact} className={classes.a}><Button color="inherit" className={classes.title}>Contact</Button></NavLink>
            {/* <NavLink to="/Resume" component={Resume} className={classes.a}><Button color="inherit" className={classes.title}>Resume</Button></NavLink>
            <NavLink to="/Posts" component={Posts} className={classes.a}><Button color="inherit" className={classes.title}>Posts</Button></NavLink> */}
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
          </Toolbar>
          <Toolbar className={classes.toolbarMobile}>
          <Typography variant="h6" className={classes.mainTitle}>
                  <NavLink to ="/" component={Home} className={classes.a} style={{ color: 'whiteSmoke' }}>Jamar Torres</NavLink>
          </Typography>
          <IconButton className={classes.menuButton} edge="start"  color="inherit" aria-label="menu" onClick={toggleDrawer("right", true)}>
                    <MenuIcon />
          </IconButton>
            <Drawer open={state.right} onClose={toggleDrawer("right", false)}>
              <List className={classes.mobileMenu}>
                <ListItem><NavLink to="/About" component={About} className={classes.a}><Button className={classes.titleMobile}>About</Button></NavLink></ListItem>
                <ListItem><NavLink to="/Projects" component={Projects} className={classes.a}><Button color="inherit" className={classes.titleMobile}>Projects</Button></NavLink></ListItem>
                <ListItem><NavLink to="/Contact" component={Contact} className={classes.a}><Button color="inherit" className={classes.titleMobile}>Contact</Button></NavLink></ListItem>
                {/* <ListItem><NavLink to="/Resume" component={Resume} className={classes.a}><Button color="inherit" className={classes.titleMobile}>Resume</Button></NavLink></ListItem>
                <ListItem><NavLink to="/Posts" component={Posts} className={classes.a}><Button color="inherit" className={classes.titleMobile}>Posts</Button></NavLink></ListItem> */}
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default Header;