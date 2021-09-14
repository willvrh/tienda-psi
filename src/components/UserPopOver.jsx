import { React, useState, useContext, useRef, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { Button, Popover, Typography, makeStyles } from '@material-ui/core';
import { AuthContext } from '../context/AuthContext';
import Avatar from '@material-ui/core/Avatar';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  username: {
    display: "-webkit-box",
    boxOrient: "vertical",
    wordBreak: "normal",
    overflow: "hidden",
    fontWeight: '700',
    textTransform: 'uppercase',
    paddingBottom: '10px',
    fontSize: '0.7em',
    color: 'rgba(0,0,0,.4)',
    textAlign: 'center'
},
popover: {
  pointerEvents: 'none',
},
paper: {
  padding: theme.spacing(1),
},
}));


export default function UserPopOver() {
    const classes = useStyles();
    const authContext = useContext(AuthContext);
    const containerRef = useRef();

   


    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogin = () => {
      authContext.loginWithGoogle();
      setAnchorEl(null);
    }

    const handleLogout = () => {
      authContext.logoutGoogle();
      setAnchorEl(null);
    }
  
    const open = Boolean(anchorEl);

    const id = open ? 'popover-user' : undefined;


    
    const [anchorElMouseOver, setAnchorElMouseOver] = useState(null);

    const handleMouseOverOpen = (event) => {
      setAnchorElMouseOver(event.currentTarget);
    };
  
    const handleMouseOverClose = () => {
      setAnchorElMouseOver(null);
    };
  
    const mouseOverOpen = Boolean(anchorElMouseOver);

    return (
      <div ref={containerRef}>
        
        <Avatar
          onClick={handleClick}
          aria-describedby={id}
          edge="end"
          aria-label="buscar órden"
          aria-haspopup="true"
          color="inherit"
          aria-owns={mouseOverOpen ? 'mouse-over-user-popover' : undefined}
          onMouseEnter={handleMouseOverOpen}
          onMouseLeave={handleMouseOverClose}
          
          >
            {authContext.getUserDisplayNameFirstLetters()}</Avatar>
            <Popover
              id="mouse-over-user-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={mouseOverOpen}
              anchorEl={anchorElMouseOver}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleMouseOverClose}
              disableRestoreFocus
              container={containerRef.current}
            >
              <Typography>
              {authContext.isLoggedIn()?
                <>Iniciaste sesión como {authContext.getUserDisplayName()}</>
               :
               <>Clic para iniciar sesión con tu cuenta de Google</>
              }
              </Typography>
            </Popover>
            
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            container={containerRef.current}
            
          >
            <div style={{padding: '10px'}}>
            <Typography className={classes.username} variant="h6" noWrap>
              {authContext.getUserDisplayName()}
              </Typography>
              {authContext.isLoggedIn()?
                <>
                <Link to="/wishlist" style={{ textDecoration: 'none', color: 'white', }}>
                  <Button style={{ width: '100%', marginBottom: '10px'}} variant="contained" color="primary">
                    <FavoriteIcon style={{paddingRight: '10px'}}/>Mis favoritos
                  </Button>
                </Link>

                <Link to="/orders" style={{ textDecoration: 'none', color: 'white', }}>
                  <Button style={{ width: '100%', marginBottom: '10px'}} variant="contained" color="primary">
                    <PlaylistAddCheckIcon style={{paddingRight: '10px'}}/>Mis órdenes
                  </Button>
                </Link>
                <br/>
                <Button onClick={()=> handleLogout()} style={{ width: '100%'}} variant="contained" color="primary">
                  <LockIcon style={{paddingRight: '10px'}}/>Cerrar sesión
                </Button>
                </>
                : 
                <Button onClick={()=> handleLogin()} style={{width: '100%'}} variant="contained" color="primary">
                  <LockOpenIcon style={{paddingRight: '10px'}}/>Iniciar sesión
                </Button>
              

              }
              
              </div>
          </Popover>
        
      </div>
    );
  }