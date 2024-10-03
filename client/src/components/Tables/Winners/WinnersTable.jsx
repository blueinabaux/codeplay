import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'rank', label: 'RANK', minWidth: 50, align: 'center' },
  { id: 'teamId', label: 'TEAM ID', minWidth: 100, align: 'center' },
  {
    id: 'teamName',
    label: 'TEAM NAME',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'domain',
    label: 'DOMAIN',
    minWidth: 140,
    align: 'center',
  },
];

const WinnersRow=[
  {
    id:1,
    rank:1,
    team_id: "T-8084",
    team_name:"Eco-Saathi",
    domain:"Smart Cities / Villages"
  },
  {
    id:2,
    rank:2,
    team_id: "T-8019",
    team_name:"Phoenix",
    domain:"Smart Cities / Villages"
  },
  {
    id:3,
    rank:1,
    team_id: "T-8012",
    team_name:"Team Lakshya",
    domain:"Healthcare"
  },
  
  {
    id:4,
    rank:2,
    team_id: "T-8077",
    team_name:"Local Shrinks",
    domain:"Healthcare"
  },
  {
    id:5,
    rank:1,
    team_id: "T-8033",
    team_name:"My India Now",
    domain:"Education"
  },
  {
    id:6,
    rank:2,
    team_id: "T-8001",
    team_name:"Tech Royale",
    domain:"Education"
  },
  {
    id:7,
    rank:1,
    team_id: "T-8093",
    team_name:"CropCoders",
    domain:"Agriculture"
  },
  {
    id:8,
    rank:2,
    team_id: "T-8013",
    team_name:"Agrosync",
    domain:"Agriculture"
  },

]

function createData(rank,teamId, teamName, domain) {
  return { rank,teamId, teamName, domain };
}




export default function WinnersTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  const winners = WinnersRow.map((item) => 
    createData(item.rank, item.team_id, item.team_name, item.domain)
  );
  
  
  let rows = winners;


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor:"#242424", paddingX:"2vw", borderRadius:"2vw"  }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ color:"white" }} >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color:"white", backgroundColor:"#242424", fontFamily:"Dela Gothic" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.teamId}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell sx={{
                          color: "white",    // Set text color to white
                          border: 'none',    // Remove the border from the body cells
                        }} key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
      sx={{color:"white"}}
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
