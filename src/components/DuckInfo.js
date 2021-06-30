import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const DuckInfo = ({ duckInfo }) => {
  return (
    <TableRow key={duckInfo.id}>
      <TableCell component="th" scope="row" align="center">
        {duckInfo.time}
      </TableCell>
      <TableCell align="center">{duckInfo.food}</TableCell>
      <TableCell align="center">{duckInfo.location}</TableCell>
      <TableCell align="center">{duckInfo.numberOfDucks}</TableCell>
      <TableCell align="center">{duckInfo.foodConsumption}</TableCell>
    </TableRow>
  )
}

export default DuckInfo
