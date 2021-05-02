import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { DiscreteAmountItem } from "src/service/getDiscreteAmount";

interface Column {
  id: "name" | "price" | "amount";
  label: string;
}

const columns: Column[] = [
  { id: "name", label: "종목" },
  { id: "price", label: "가격" },
  { id: "amount", label: "수량" },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 270,
    maxWidth: 300,
  },
});
interface StockTableProp {
  amounts: DiscreteAmountItem[];
}
export default function StockTable({ amounts }: StockTableProp) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {amounts.map((item) => {
              return (
                <TableRow hover role="checkbox" tabIndex={0} key={item.code + "table"}>
                  <TableCell key={item.code} align={"left"}>
                    {item.name}
                  </TableCell>
                  <TableCell key={item.code} align={"left"}>
                    {item.price}
                  </TableCell>
                  <TableCell key={item.code} align={"center"}>
                    {item.amount}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
