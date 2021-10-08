import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

/*
    props:{
        columns:[{key:id(String) , label(String), minWidth(number)}]
        rows:{[]}
    }
*/



// const rows1 = [
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
//   createData("John", "a11111111", "male", <DeleteButton />),
// ];

// function createData(name, code, population, size) {
//     return { name, code, population, size };
//   }

export default function StickyHeadTable({ datas = [] }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const rows = datas.rows;
  const columns = datas.columns;


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
     
    <Paper sx={{ width: "100%", overflow: "auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ bgcolor: "primary.main", color: "#FFFFFF" }}
                  key={column.id}
                  style={{ minWidth: column.minWidth|| 150 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return <TableCell key={column.id} sx={{color:"text.secondary"}}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
