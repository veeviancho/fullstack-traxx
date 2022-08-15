import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBody from '@mui/material/TableBody';

import { useState, useEffect } from 'react';
import api from '../api'

import EditForm from './editForm'

const DataList = ({StyledTableCell, StyledTableRow, currency, getAllCurrency}) => {

  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    if (currency.length > 0) {
      const arr = []
      currency.forEach(item => {
        arr.push({ ...item, isEdit: false })
      })
      setCurrencies(arr)
    }
  }, [currency])

  const handleEdit = (id) => {
    const newArr = currencies.map(item => {
      if (item.id === id) return { ...item, isEdit: !item.isEdit }
      else return item
    })
    setCurrencies(newArr)
  }

  const handleDelete = async (id) => {
    const confirmDel = window.confirm("Confirm delete?");
    if (confirmDel) {
      const response = await api.delete(`/api/currency/${id}`)
      const data = await response.data;
      if (data) {
        getAllCurrency();
      }
    }
  }

  return (
    <TableBody>
      {currencies.map((row) => {
        const { id, base, counter, rate, isEdit } = row
        if (isEdit) {
          return (
            <EditForm 
              id={id}
              key={id}
              base={base} 
              counter={counter} 
              rate={rate} 
              StyledTableCell={StyledTableCell}
              StyledTableRow={StyledTableRow}
              handleEdit={handleEdit}
              getAllCurrency={getAllCurrency}
            />
          )
        } else {
          return (
            <StyledTableRow key={id}>
        
              <StyledTableCell component="th" scope="row">
                {base}
              </StyledTableCell>
              <StyledTableCell align="right">{counter}</StyledTableCell>
              <StyledTableCell align="right">{rate}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton onClick={() => handleEdit(id)}>
                  <EditIcon />
                </IconButton>
              </StyledTableCell>

              <StyledTableCell align="right">
                <IconButton onClick={() => handleDelete(id)}>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>

            </StyledTableRow>
          )
        }
      })}
    </TableBody>
  )
}

export default DataList;