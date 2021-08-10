import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { RRSW } from "src/service/getEfficientFrontier";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PortfolioInfoCard from "src/component/common/widget/PortfolioInfoCard";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    margin: "2rem",
  },
  pieChartContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  tableChartContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    "& > div": {
      margin: "2rem",
    },
  },
  table: {
    minWidth: 150,
  },
}));

interface RecommendWeightProp {
  weights: undefined | RRSW["weights"];
}

const RecommendWeight = ({ weights }: RecommendWeightProp) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {weights ? (
        <>
          <div className={classes.pieChartContainer}>
            <PortfolioInfoCard
              values={weights.values}
              labels={weights.items}
              title={"개선 전"}
              volatility={25.4}
              returns={23.2}
              sharpe={1}
              oridentation="v"
            />
            <PortfolioInfoCard
              values={weights.values}
              labels={weights.items}
              title={"개선 후"}
              volatility={20.4}
              returns={23.2}
              sharpe={1}
              oridentation="v"
            />
          </div>
          <div className={classes.tableChartContainer}>
            <StockListTable items={weights.items} values={weights.values} />
            <ArrowForwardIosIcon style={{ fontSize: "4rem" }} />
            <StockListTable items={weights.items} values={weights.values} />
          </div>
        </>
      ) : (
        <div>loading~!!~!~!~</div>
      )}
    </div>
  );
};

export default RecommendWeight;

function StockListTable(weights: RRSW["weights"]) {
  const classes = useStyles();
  const top10Items = weights.items.slice(0, 10);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {top10Items.map((item, index) => (
            <TableRow key={item}>
              <TableCell align="center" component="th" scope="row">
                {item}
              </TableCell>
              <TableCell align="center">{weights.values[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
