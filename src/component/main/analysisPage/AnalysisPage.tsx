/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StockChipGroup from "./component/stockChipGroup/StockChipGroup";
import SelectedPortfolio from "./component/analysisPortfolio/AnalysisPortfolio";
import ModifyPortfolio from "./component/modifyPortfolio/ModifyPortfolio";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

interface stepContentProp {
  step: number;
  sharesHeldList: any;
  modifiedStockList: any;
  selectedPF: RRSW;
  onChange: (name: string, value: number) => void;
  onDelete: (name: string) => void;
  onAdd: (name: string, code: string) => void;
  onChangeSelectedPF: (PF: RRSW) => void;
}

interface RRSW {
  returns: number;
  risk: number;
  sharpe: number;
  weights: {
    items: string[];
    values: number[];
  };
}

function getStepContent({
  step,
  sharesHeldList,
  modifiedStockList,
  selectedPF,
  onChange,
  onDelete,
  onAdd,
  onChangeSelectedPF,
}: stepContentProp) {
  switch (step) {
    case 0:
      return <StockChipGroup stockList={sharesHeldList} onChange={onChange} onDelete={onDelete} onAdd={onAdd} />;
    case 1:
      return <ModifyPortfolio stockList={sharesHeldList} modifiedStockList={modifiedStockList} />;
    case 2:
      return (
        <SelectedPortfolio
          stockList={sharesHeldList}
          modifiedStockList={modifiedStockList}
          selectedPF={selectedPF}
          onChangeSelectedPF={onChangeSelectedPF}
        />
      );
    default:
      return "Unknown step";
  }
}

export default function AnalysisPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Choose Stock", "Modify Portfolio", "Analysis Portfolio"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [sharesHeldList, setSharesHeldList] = React.useState<{ name: string; code: string; weight: number }[]>([
    { name: "SK하이닉스", code: "003550", weight: 0.1 },
    { name: "LG", code: "005380", weight: 0.2 },
    { name: "현대차", code: "036570", weight: 0.1 },
    { name: "삼성전자", code: "035720", weight: 0.1 },
    { name: "한국전력", code: "000660", weight: 0.2 },
    { name: "카카오", code: "015760", weight: 0.1 },
    { name: "엔씨소프트", code: "005930", weight: 0.1 },
    { name: "셀트리온", code: "068270", weight: 0.1 },
  ]);

  const onChange = (name: string, value: number) => {
    let updateList = [...sharesHeldList];
    updateList = updateList.map((item) => {
      return item.name !== name ? item : { name: item.name, code: item.code, weight: value };
    });
    setSharesHeldList(updateList);
  };

  const onAdd = (name: string, code: string) => {
    if (sharesHeldList.find((item: { name: string; code: string }) => item.name === name || item.code === code)) return;
    let updateList = [...sharesHeldList];
    updateList.push({ name: name, code: code, weight: 0 });
    setSharesHeldList(updateList);
  };

  const onDelete = (name: string) => {
    let updateList = [...sharesHeldList];
    updateList = updateList.filter((item) => {
      return item.name !== name;
    });
    setSharesHeldList(updateList);
  };

  const [selectedPF, setSelectedPF] = React.useState<RRSW>({
    returns: 0.17909763448675378,
    risk: 0.18606897117477664,
    sharpe: 0.8550465640899988,
    weights: {
      items: ["현대차", "삼성전자", "SK텔레콤"],
      values: [0.3, 0.4, 0.3],
    },
  });
  const onChangeSelectedPF = (portfolio: RRSW) => {
    setSelectedPF(portfolio);
  };

  const modifiedStockList = JSON.parse(JSON.stringify(sharesHeldList));

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent({
                step: index,
                sharesHeldList,
                modifiedStockList,
                selectedPF,
                onChange,
                onDelete,
                onAdd,
                onChangeSelectedPF,
              })}
              <div className={classes.actionsContainer}>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
