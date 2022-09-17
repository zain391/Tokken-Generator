import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import meta from "../../assets/meta.png"
import wallet from "../../assets/wallet.png"

const wallets = ['Install MetaMask', ''];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select a wallet</DialogTitle>
      <List sx={{ pt: 0 }}>
       
          <ListItem button onClick={() => handleListItemClick(wallets)} key={wallets}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <img src={meta} alt="meta"></img>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={wallets} />
          </ListItem>

          <ListItem button onClick={() => handleListItemClick(wallets)} key={wallets}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[200], color: blue[900] }}>
                <img src={wallet} alt="wallet"></img>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={wallets} />
          </ListItem>
        

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add Wallet" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function TokkenModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(wallets[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
      Wallet Connect
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
