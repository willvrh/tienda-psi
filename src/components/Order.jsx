import { React } from "react";
import { Link } from 'react-router-dom';
import { Container, makeStyles, Box, List, Typography, Grid, Divider, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Alert from "@material-ui/lab/Alert";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Skeleton from '@material-ui/lab/Skeleton';

import { query, where, collection, getDocs } from 'firebase/firestore';
import { getData } from '../firebase/FirebaseClient';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: "0",
    clear: 'both'
  },
  gridParent: {
    maxWidth: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: "0",
  },
  price: {
    fontSize: '0.9em',
    fontWeight: '600',
  },
  description: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "normal",
    overflow: "hidden",
    fontWeight: '500',
    color: 'rgba(0,0,0,.6)',
    paddingBottom: '10px',
    paddingTop: '10px',

  },
  stock: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "normal",
    overflow: "hidden",
    fontWeight: '500',
    paddingTop: '10px',
    color: 'rgba(0,0,0,.6)',
    paddingBottom: '10px',
  },
  category: {
    display: "-webkit-box",
    boxOrient: "vertical",
    wordBreak: "normal",
    overflow: "hidden",
    textTransform: 'uppercase',
    fontWeight: '700',
    paddingBottom: '15px',
    color: 'rgba(0,0,0,.4)'
  },
}));

export default function Order(props) {
  const classes = useStyles();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  
  

  useEffect(() => {
    (async () => {
      const filterQuery = query(collection(getData(), "ordenes"), where("__name__", "==", props.id));
      const orderSnapshot = await getDocs(filterQuery);
      
      setOrder(orderSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))[0]);
      setLoading(false);
    })()
  }, [])

  
  if (loading) {
    return (<>
       <Container className={classes.root}>
          <Grid container spacing={3} className={classes.gridParent}>
            <Grid item lg={8} md={8} xs={12}>
            <Box boxShadow={3} item lg={8} md={8} xs={12} style={{padding: '15px'}}>
               <Skeleton height='120px' width="100%" />
              </Box>
            </Grid>

            <Grid item lg={4} md={4} xs={12} >
            <Box boxShadow={3} item lg={4} md={4} xs={12} style={{padding: '15px'}}>
              <div className={classes.content}>
                <Skeleton height='50px' width="100%" />
                <Divider />
                <br />
                <Box
                  component="div"
                  className={classes.description}>
                    <Skeleton height='50px' width="100%" />
                    <Skeleton height='50px' width="100%" />
                </Box>
                <Skeleton height='50px' width="100%" />
              </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
    </>);
  } else {

  
  return (
    order == null?
    <>
      <Alert severity="warning">No se encontró la órden {props.id}
        <Link style={{marginLeft: '20px'}} to={`/`}>
          Volvé al listado de productos.
        </Link>
      </Alert>
    </> :
    <>
      <Alert icon={<CheckCircleOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="success">
        Estás viendo la órden {order.id}
      </Alert>
      {props.children}
       <Container className={classes.root}>
          <Grid container spacing={3} className={classes.gridParent}>
            <Grid item lg={8} md={8} xs={12}>
            <Box boxShadow={3} item lg={8} md={8} xs={12} style={{padding: '15px'}}>
              <List>
                {order==undefined?<></>:
                  order.items.map((item) => (<><CartItem cartItem={item} onDelete={()=>{}} /><Divider variant="inset" component="li" /></>))
                }
                
              </List>
             
              </Box>

            </Grid>

            <Grid item lg={4} md={4} xs={12} >
            <Box boxShadow={3} item lg={4} md={4} xs={12} style={{padding: '15px'}}>

              <div className={classes.content}>

                <Typography gutterBottom variant="h5" >
                <ShoppingCartIcon style={{paddingRight: '15px'}}/>Detalle de la órden
                </Typography>

                <Divider />
                <br />
                <Box
                  component="div"
                  className={classes.description}>
                    <Typography className={classes.description} gutterBottom variant="body2">
                    Generada el { order.date.toDate().toLocaleString() }
                  </Typography>
                  <Typography className={classes.description} gutterBottom variant="body2">
                    Tenés {order.items.length} {order.items.length > 1 ? "items" : "item"} en la órden.
                  </Typography>
                </Box>

                <Typography className={classes.price} noWrap gutterBottom variant="button">
                  Total: $ {Number(order.total).toLocaleString('es-AR')}
                </Typography>



              </div>
              </Box>
            </Grid>
          </Grid>


        </Container>
     
    </>
  );
}


}