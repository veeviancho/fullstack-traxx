import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DataList from './dataList';
import NewPost from './newPost'

import { useState, useEffect } from 'react';
import api from '../api'

const CustomisedTable = () => {

  const [currency, setCurrency] = useState([]);

  const getAllCurrency = async () => {
    const response = await api.get('/api/currency')
    const data = await response.data;
    if (data) {
      setCurrency(data.response)
    }
  }

  useEffect(() => {
    getAllCurrency();
  }, [])
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Base</StyledTableCell>
            <StyledTableCell align="right">Counter</StyledTableCell>
            <StyledTableCell align="right">Rate</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <DataList StyledTableRow={StyledTableRow} StyledTableCell={StyledTableCell} currency={currency} getAllCurrency={getAllCurrency}/>
      </Table>
    </TableContainer>
    <NewPost getAllCurrency={getAllCurrency} />
    </div>
  )
}

export default CustomisedTable;