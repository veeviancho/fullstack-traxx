import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Login = () => {

  const navigate = useNavigate();

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const request = ({
      username: form.get('username'),
      password: form.get('password')
    })
    try {
      const response = await api.post('/api/users/login', request);
      const data = await response.data;
      if (data) {
        setError('')
        localStorage.setItem('id', data.response.id);
        navigate('/')
      }
    } catch (err) {
      console.log(err)
      setError(err.response.data.msg)
    }
  }

  return (
    <div className="view">
    <Container maxWidth="sm" sx={{ borderRadius: 5,  p: 5, bgcolor: 'white' }}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Avatar sx={{ m: 1, backgroundColor: 'primary.dark'}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ m: 2 }}>
        Login
      </Typography>
      <Typography component="p" variant="subtitle1" sx={{ color: 'error.main' }}>
        { error && error }
      </Typography>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          id="username"
          name="username"
          label="Username"
          required
          fullWidth
          margin="normal"
          autoComplete="username"
          autoFocus
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          required
          fullWidth
          margin="normal"
          autoComplete="current-password"
          type="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 1, py: 1 }}
        >
          Login
        </Button>
      </Box>
      </Box>
</Container>
    </div>
    
  )
};

export default Login;