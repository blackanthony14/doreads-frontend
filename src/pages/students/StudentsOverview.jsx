import Sidebar from '../../components/SideBar';
import * as React from 'react';
import '../../styles/Students.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
const rows = [
  { ID: '1', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 4.0 },
  { ID: '2', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 4.3 },
  { ID: '3', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 6.0 },
  { ID: '4', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 4.3 },
  { ID: '5', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 3.9 },
  { ID: '6', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 3.9 },
  { ID: '7', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 3.9 },
  { ID: '8', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 3.9 },
  { ID: '9', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 3.9 },
  { ID: '10', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 3.9 },
  { ID: '11', FullName: 'AdonisA', Carnet: 502130458, Email: 'adoview@home.com', Status: 3.9 }
];

const columns = [
  { id: 'ID', label: 'ID', align: 'left' },
  { id: 'FullName', label: 'FullName', align: 'right' },
  { id: 'Carnet', label: 'Carnet', align: 'right' },
  { id: 'Email', label: 'Email', align: 'right' },
  { id: 'Status', label: 'Status', align: 'right' }
];
const StudentsOverview = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="OverviewStudent">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="ViewStudent">
        <div className="BodyOveridetudent">
          <div className="OverideHeaderStudent">
            <h1 className="Title">Register Student</h1>
          </div>
          <div className="TableCenter">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow key={row.name}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentsOverview;
