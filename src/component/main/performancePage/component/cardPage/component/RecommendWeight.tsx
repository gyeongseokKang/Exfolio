import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Plot from "react-plotly.js";
import { RRSW } from "src/service/getEfficientFrontier";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme: Theme) => ({
  root: { display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column" },
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
    minWidth: 650,
  },
}));

interface RecommendWeightProp {
  weights: undefined | RRSW["weights"];
}

const RecommendWeight = ({ weights }: RecommendWeightProp) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>Dr.folio가 추천하는 비율</div>
      {weights ? (
        <>
          <div className={classes.pieChartContainer}>
            <WeightPieChart items={weights.items} values={weights.values} />
            <WeightPieChart items={weights.items} values={weights.values} />
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

const WeightPieChart = (weights: RRSW["weights"]) => {
  return (
    <Plot
      data={[
        {
          labels: weights.items,
          values: weights.values,
          type: "pie",
          hoverinfo: "label+percent",
          textinfo: "label+percent",
          textfont: { size: 15, family: "", color: "" },
          sort: false,
          textposition: "inside",
          insidetextorientation: "horizontal",
        },
      ]}
      layout={{
        width: 300,
        height: 300,
        margin: { t: 10, b: 20, r: 0, l: 0 },
        showlegend: false,
      }}
      config={{ displayModeBar: false }}
    />
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
