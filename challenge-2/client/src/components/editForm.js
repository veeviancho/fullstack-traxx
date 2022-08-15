import { TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import PublishIcon from '@mui/icons-material/Publish';
import api from '../api';

const EditForm = ({ StyledTableCell, StyledTableRow, id, base, counter, rate, handleEdit, getAllCurrency }) => {

  const [values, setValues] = useState({
    base,
    counter,
    rate
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (id) => {
    try {
      const response = await api.put(`/api/currency/${id}`, values);
      const data = await response.data;
      if (data) {
        handleEdit(id)
        getAllCurrency();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <TextField
          id="base"
          name="base"
          label="Base"
          required
          margin="normal"
          value={values.base}
          onChange={handleChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <TextField
          id="counter"
          name="counter"
          label="Counter"
          required
          margin="normal"
          value={values.counter}
          onChange={handleChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <TextField
          id="rate"
          name="rate"
          label="Rate"
          required
          fullWidth
          margin="normal"
          value={values.rate}
          onChange={handleChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <IconButton onClick={() => handleSubmit(id)}>
          <PublishIcon />
        </IconButton>
      </StyledTableCell>

      <StyledTableCell align="right">
        <IconButton onClick={() => handleEdit(id)}>
          <CancelIcon />
        </IconButton>
      </StyledTableCell>

    </StyledTableRow>
  )
}

export default EditForm;