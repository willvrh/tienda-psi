import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import CartWidget from './CartWidget';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background : '#2E3B55',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function NavBar() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'menu-tienda';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to={`/category/web`} style={{ textDecoration: 'none', color: 'black', }}>
        <MenuItem onClick={handleMenuClose}>Sistemas WEB</MenuItem>
      </Link>
      
      <Link to={`/category/escritorio`} style={{ textDecoration: 'none', color: 'black', }}>
        <MenuItem onClick={handleMenuClose}>Sistemas de escritorio</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'menu-tienda-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-tienda"
          aria-haspopup="true"
          color="inherit"
        >
          <ArrowDropDownIcon />
        </IconButton>
        <p>Categorías</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar 
        className={classes.appBar}
        position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="abrir sidebar"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', }}>
            <Typography className={classes.title} variant="h6" noWrap>
              ProntasApps
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button edge="end"
              aria-label="categorías de la tienda"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit" 
              >Categorías
              <ArrowDropDownIcon />
              </Button>
          </div>
          <CartWidget/>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="ver más"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>

          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}