import React from 'react'
import './EmployeeList.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function EmployeeList() {

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
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Ram', 9905697884, 'ram@gmail.com', 2, ),
    createData('Ram', 9905697884, 'ram@gmail.com', 2, ),
    createData('Ram', 9905697884, 'ram@gmail.com', 2, ),
    createData('Ram', 9905697884, 'ram@gmail.com', 2, ),
    createData('Ram', 9905697884, 'ram@gmail.com', 2, )
  ];
  
  return (
    // <div className='employee_list'>Employee List
    // <table className="widget_table">
    //     <tr className="widget_tr">
    //       <th className="widget_th">Name</th>
    //       <th className="widget_th">Phone Number</th>
    //       <th className="widget_th">Email</th>
    //       <th className="widget_th">Years of Experience</th>
    //       <th className="widget_th"> Upload resume</th>
    //     </tr>
    //     <tr className="widget_tr">
    //       <td className="widget__user">
         
    //       <span className="widget__name">Sranav</span>
    //       </td>
    //       <td className="widget_date">1234567890</td>
    //       <td className="widget_amount">sra@gmail.com</td>
    //       <td className="widget_amount">2</td>
    //       <td className="widget_amount"></td>
          
    //     </tr>
    //     <tr className="widget_tr">
    //       <td className="widget__user">
         
    //       <span className="widget__name">Sranav</span>
    //       </td>
    //       <td className="widget_date">1234567890</td>
    //       <td className="widget_amount">sra@gmail.com</td>
    //       <td className="widget_amount">2</td>
    //       <td className="widget_amount"></td>
         
    //     </tr>
    //     <tr className="widget_tr">
    //       <td className="widget__user">
         
    //       <span className="widget__name">Sranav</span>
    //       </td>
    //       <td className="widget_date">1234567890</td>
    //       <td className="widget_amount">sra@gmail.com</td>
    //       <td className="widget_amount">2</td>
    //       <td className="widget_amount"></td>
    //     </tr>
    //     <tr className="widget_tr">
    //       <td className="widget__user">
          
    //       <span className="widget__name">Sranav</span>
    //       </td>
    //       <td className="widget_date">1234567890</td>
    //       <td className="widget_amount">sra@gmail.com</td>
    //       <td className="widget_amount">2</td>
    //       <td className="widget_amount"></td>
         
    //     </tr>
    //   </table>
    // </div>
    <TableContainer component={Paper} className="employee_list">
      <h3>Employee Details</h3>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" className='widget_table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Email ID</StyledTableCell>
            <StyledTableCell align="right">Years Of Experiance</StyledTableCell>
            <StyledTableCell align="right">Uploaded Resume</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default EmployeeList