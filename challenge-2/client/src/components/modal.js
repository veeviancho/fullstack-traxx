import { useState } from 'react';
import { Backdrop, Box, Modal, Fade, Typography, TextField, Button } from '@mui/material';
import api from '../api'
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ handleClose, open }) {

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const request = {
      base: form.get('base').toUpperCase(),
      counter: form.get('counter').toUpperCase(),
      rate: parseFloat(form.get('rate'))
    }
    try {
      const response = await api.post('/api/currency/', request);
      const data = await response.data;
      if (data) {
        setError('');
        handleClose();
      }
    } catch (err) {
      console.log(err)
      setError(err.response.data.error)
    }
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create
            </Typography>
            <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <TextField
                id="base"
                name="base"
                label="Base"
                required
                fullWidth
                margin="normal"
                autoFocus
              />
              <TextField
                id="counter"
                name="counter"
                label="Counter"
                required
                fullWidth
                margin="normal"
              />
              <TextField
                id="rate"
                name="rate"
                label="Rate"
                required
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1, py: 1 }}
              >
                Add New
              </Button>
            </Box>
            <Typography component="p" variant="subtitle1" sx={{ color: 'error.main' }} align="center">
              { error && error }
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
