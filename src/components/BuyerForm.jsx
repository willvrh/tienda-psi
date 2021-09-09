import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function BuyerForm(props) {

  const [invalidDialog, setInvalidDialog] = useState({open: false, message: ''});
  const [buyerData, setBuyerData] = useState({
      name: '',
      phone: '',
      email: ''
  })

  const handleInputChange = (event) => {
      setBuyerData({
          ...buyerData,
          [event.target.name] : event.target.value
      })
  }

  const validateForm = () => {
    if (buyerData.name == "" ) {
      setInvalidDialog({open: true, message: 'Completá el nombre del comprador'});
      document.getElementsByName('name')[0].focus();
      return;
    }
    if (buyerData.phone == "" ) {
      setInvalidDialog({open: true, message: 'Completá el teléfono del comprador'});
      document.getElementsByName('phone')[0].focus();
      return;
    }
    if (buyerData.email != buyerData.repeatEmail || buyerData.email == "" || !buyerData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      buyerData.email != buyerData.repeatEmail ? setInvalidDialog({open: true, message: 'Repetí el mismo email en ambos campos'}) : setInvalidDialog({open: true, message: 'El email que ingresaste no válido'});
      document.getElementsByName('email')[0].focus();
      return;
    }
    
    props.onBuyFinish(buyerData);
  }

  return (
    <div>
      <Dialog open={props.open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Datos del comprador</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Completá el siguiente formulario con tus datos para finalizar la órden de compra.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Nombre del comprador"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Teléfono del comprador"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="repeatEmail"
            name="repeatEmail"
            label="Repetir email"
            type="email"
            fullWidth
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          
          
          {!props.creatingOrder ?
            <>
            <Button onClick={() => props.setFormOpen(false)} color="primary">
              Cancelar
            </Button>
            <Button color="primary" onClick={() => validateForm()}>
              Finalizar
            </Button>
            </>
            :
            props.buyStatus.isFinished ?
              <Button color="primary" >
              <CheckCircleOutlineIcon style={{color: 'green', marginRight: '15px'}}/> Finalizado!
            </Button>  
            :
            <Button color="primary" >
              <CircularProgress size={25} style={{marginRight: '15px'}}/>Cargando órden ...
            </Button>  
        
          }
          
        </DialogActions>
      </Dialog>

      <Dialog onClose={()=>setInvalidDialog({open: false, message: ''})} open={invalidDialog.open}>
        <DialogTitle id="simple-dialog-title">{invalidDialog.message}</DialogTitle>
      </Dialog>

    </div>
  );
}