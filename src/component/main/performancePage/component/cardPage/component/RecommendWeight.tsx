import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PortfolioInfoCard from "src/component/common/widget/PortfolioInfoCard";
import { getPortfolioPerformance, PortfolioPerformance } from "src/service/getPortfolioPerformance";
import { RRSW_2, UserPerformance } from "src/service/getUserPerformance";
import WithLoading from "src/component/common/hoc/WithLoading";

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
    "& > div": {
      width: "30%",
      minWidth: "350px",
    },
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
  portfolio: RRSW_2;
}

const PortfolioInfoCardWithLodaing = WithLoading("포트폴리오 분석중", "30%", "100%")(PortfolioInfoCard);
const StockListTableWithLodaing = WithLoading("포트폴리오 분석중", "100%", "100%")(StockListTable);
const RecommendWeight = ({ portfolio }: RecommendWeightProp) => {
  console.log("RecommendWeight render", portfolio);
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  const [portfolioPerformance, setPortfolioPerformance] = useState<PortfolioPerformance | undefined>({
    enhance: {
      returns: 0,
      risk: 0,
      sharpe: 0,
      weights: {
        items: [""],
        values: [0],
      },
    },
    performance: {
      returns: portfolio.returns,
      risk: portfolio.risk,
      sharpe: portfolio.sharpe,
      weights: {
        items: portfolio.weights.items.map((item) => item.name),
        values: portfolio.weights.values,
      },
    },
  });

  useEffect(() => {
    const stockList = portfolio.weights.items.map((item, index) => {
      return {
        name: item.name,
        code: item.code,
        weight: portfolio.weights.values[index],
      };
    });
    setLoading(true);
    getPortfolioPerformance(stockList, portfolio.returns, portfolio.risk, portfolio.sharpe).then((res) => {
      setPortfolioPerformance(res);
      setLoading(false);
    });
  }, [portfolio]);

  return (
    <div className={classes.root}>
      {portfolioPerformance && (
        <>
          <div className={classes.pieChartContainer}>
            <PortfolioInfoCard
              values={portfolioPerformance.performance.weights.values}
              labels={portfolioPerformance.performance.weights.items}
              title={"개선 전"}
              volatility={portfolioPerformance.performance.risk}
              returns={portfolioPerformance.performance.returns}
              sharpe={portfolioPerformance.performance.sharpe}
              oridentation="v"
            />
            <PortfolioInfoCardWithLodaing
              loading={loading}
              values={portfolioPerformance.enhance.weights.values}
              labels={portfolioPerformance.enhance.weights.items}
              title={"개선 후"}
              volatility={portfolioPerformance.enhance.risk}
              returns={portfolioPerformance.enhance.returns}
              sharpe={portfolioPerformance.enhance.sharpe}
              oridentation="v"
            />
          </div>
          <div className={classes.tableChartContainer}>
            <StockListTable
              items={portfolioPerformance.performance.weights.items}
              values={portfolioPerformance.performance.weights.values}
            />
            <ArrowForwardIosIcon style={{ fontSize: "4rem" }} />
            <StockListTableWithLodaing
              loading={loading}
              items={portfolioPerformance.enhance.weights.items}
              values={portfolioPerformance.enhance.weights.values}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RecommendWeight;

function StockListTable(weights: { items: string[]; values: number[] }) {
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
