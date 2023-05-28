import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from "../Media/img/profilforme.jpg";
import { theme } from './Theme';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",

    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabs: {
    marginLeft: "auto",
    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: 20,
    },
    "& .Mui-selected": {
     
      color: "#000",
      opacity: 0.7,
      borderRadius: 2,
    },
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    color: "white",
    
  },

  hamburgerMenuIcon: {
    height: "50px",
    width: "50px",
  },
  menuIconContainer: {
    marginLeft: "auto",
    color: "white",
    "&:hover": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
};

const DesktopNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
      sx={styles.tabs}
    >
      <Tab sx={styles.tab} label="Home" component={Link} to="/" />
      <Tab sx={styles.tab} label="About us" component={Link} to="/about" />
      <Tab sx={styles.tab} label="Contact us" component={Link} to="/contact" />
    
     
    </Tabs>
  );
};

const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Box sx={styles.toolbarMargin} />
        <Paper>
          <List disablePadding>
            <ListItem
              divider
              button
              component={Link}
              to="/"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>Home</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/about"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>About us</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/contact"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>Contact us</ListItemText>
            </ListItem>
            
          </List>
        </Paper>
      </SwipeableDrawer>
      <IconButton
        sx={styles.menuIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon sx={styles.hamburgerMenuIcon} />
      </IconButton>
    </React.Fragment>
  );
};

const Header = () => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={styles.appbar}
        color="secondary"
        elevation={9}
        style={{ backgroundColor: "GrayText" }}
      >
        <Toolbar disableGutters={true}>
          <Button
            disableRipple
            component={Link}
            to="/"
            sx={styles.logoContainer}
          >
            <Box alt="company logo" />
            <a href="">
              {" "}
              <img src={logo} className="fadeinout" id="logo" />
            </a>
          </Button>
          {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
