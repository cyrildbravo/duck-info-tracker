// const duckInfo = [
//   {
//     id: 1,
//     time: 'May 10th at 1:00pm',
//     food: 'Bread',
//     location: 'Central Park',
//     numberOfDucks: 5,
//     foodConsumption: 5,
//   }
// ]

import DuckInfo from './DuckInfo'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DuckTableInfo = ({duckTableInfo}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Food</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Number of ducks fed</TableCell>
            <TableCell align="center">Food consumption of ducks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {duckTableInfo.map((duckInfo) => (
            <DuckInfo key={duckInfo.id} duckInfo={duckInfo}></DuckInfo>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DuckTableInfo