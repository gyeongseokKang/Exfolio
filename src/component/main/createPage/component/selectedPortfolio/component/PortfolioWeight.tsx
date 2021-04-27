import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

interface Column {
  id: "name" | "code" | "weight";
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: Column[] = [
  { id: "code", label: "Code", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 50 },
  {
    id: "weight",
    label: "Weight",
    minWidth: 50,
    // align: "right",
  },
];

interface Data {
  code: string;
  name: string;
  weight: number;
}

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

interface PortfolioRatioProp {
  stockList: stockInfo[];
  weights: {
    name: string[];
    value: number[];
  };
}

const PortfolioWeight = ({ weights, stockList }: PortfolioRatioProp) => {
  const classes = useStyles();
  const rows: Data[] = [];
  console.log(weights);

  for (let i = 0; i < weights.name.length; i++) {
    let code = stockList.find((item) => item.name === weights.name[i])?.code;
    rows.push({
      code: code || "-",
      name: weights.name[i],
      weight: weights.value[i],
    });
  }

  return (
    <div
      className="PortfolioRatio"
      style={{
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingBottom: "10px",
      }}
    >
      <h2>포트폴리오 비중</h2>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default PortfolioWeight;
