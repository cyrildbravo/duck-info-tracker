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
            <TableCell align="center">TIME</TableCell>
            <TableCell align="center">FOOD</TableCell>
            <TableCell align="center">LOCATION</TableCell>
            <TableCell align="center">NUMBER OF DUCKS FED</TableCell>
            <TableCell align="center">FOOD CONSUMPTION OF DUCKS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {duckTableInfo.map((duckInfo, index) => (
            <DuckInfo key={index} duckInfo={duckInfo}></DuckInfo>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DuckTableInfo
