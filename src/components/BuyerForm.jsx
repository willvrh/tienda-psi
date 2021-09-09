import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function BuyerForm(props) {
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
            label="Nombre del comprador"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="phone"
            label="Teléfono del comprador"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="repeatEmail"
            label="Repetir email"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setFormOpen(false)} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={() => props.onBuyFinish()}>
            Finalizar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}