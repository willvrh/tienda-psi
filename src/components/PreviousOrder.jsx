import { React } from "react";
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Divider, Typography, Grid, Box, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
      maxWidth: '100%',
      transition: "transform 0.15s ease-in-out",
      "&:hover": { transform: "scale3d(1.01, 1.01, 1)" },
  },
  cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
  },
  cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
  },
  cardTitle: {
      fontSize: '1em',
      fontWeight: '550',
  },
  descriptionBox: {
      display: "-webkit-box",
      boxOrient: "vertical",
      lineClamp: 2,
      wordBreak: "normal",
      overflow: "hidden",
      fontWeight: '00',
      color: 'rgba(0,0,0,.6)'
  },
  categoryBox: {
      display: "-webkit-box",
      boxOrient: "vertical",
      wordBreak: "normal",
      overflow: "hidden",
      fontWeight: '800',
      textTransform: 'uppercase',
      paddingBottom: '20px',
      fontSize: '0.8em',
      color: 'rgba(0,0,0,.4)'
  },
  idText: {
      float: 'right',
      fontSize: '0.8em',
      fontWeight: '500',
      color: 'rgba(0,0,0,.3)'
  },
  priceText: {
      fontWeight: '700',
      fontSize: '1.2em',
      marginBottom: '15px'
  },

});


export default function PreviousOrder(props) {

    const order = props.order;
    const classes = useStyles();

    return (
      
      <Grid item xs={12} sm={12} md={12} >
      <Box boxShadow={3} item xs={12} sm={12} md={12}>
          <Card className={classes.root}>
              <Link title={order.date.toLocaleString()} to={`/order/${order.id}`} style={{ textDecoration: 'none', color: 'black', }}>
              <CardActionArea>
                 
                  <CardContent>
                      <div className={classes.cardContent}>
                          
                          <Typography className={classes.priceText} gutterBottom variant="h5" >
                              Total: $ {Number(order.total).toLocaleString('es-AR')}
                              <Typography className={classes.idText}>#{order.id}</Typography>
                          </Typography>
                          
                          
                          <Typography className={classes.cardTitle} noWrap gutterBottom variant="body2">
                              Detalles de la órden:
                          </Typography>
 
                          
                      </div>

                      <Box
                          component="div"
                          className={classes.categoryBox}>
                            {order.items.map((item) => (<>~ {item.item.description} x {item.quantity}</>))}
                          
                      </Box>
                      <Box
                          component="div"
                          className={classes.descriptionBox}>
                          { "Generada el: "+order.date.toDate().toLocaleString() }
                      </Box>

                      <Divider style={{marginTop: '10px', marginBottom: '10px',}}/>
                      <Box
                          component="div"
                          className={classes.descriptionBox}>
                          {order.buyer.name+" - "+order.buyer.email+" - "+order.buyer.phone}
                      </Box>

                      
                  </CardContent>
              </CardActionArea>
              </Link>

              

                  
          </Card>
      </Box>
      
  </Grid >
    );
}