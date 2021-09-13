import { React, useState } from 'react';
import { Link} from 'react-router-dom';
import { Button, Popover, makeStyles, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function OrderSearchPopOver() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [findOrderId, setFindOrderId] = useState('');
  
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    const onKeyUpValue = (evt) => {
        setFindOrderId(evt.target.value)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'popover-search-order' : undefined;

    return (
      <div>
        <Button 
            onClick={handleClick}
            aria-describedby={id}
            edge="end"
            aria-label="buscar órden"
            aria-haspopup="true"
            color="inherit" 
              >
          Buscar órden
        </Button>
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
          
        >
            <TextField onKeyUp={onKeyUpValue.bind(this)} style={{margin: '10px'}} id="standard-basic" label="ID de la órden:" />
            <br/>
            <Link to={`/order/${findOrderId}`} style={{ textDecoration: 'none', color: 'black', }}>
            <Button style={{margin: '10px', float: 'right',}} variant="contained" color="primary">
                <SearchIcon />Buscar
            </Button>
            </Link>
        </Popover>
      </div>
    );
  }