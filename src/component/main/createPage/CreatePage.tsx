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
import SelectedPortfolio from "./component/selectedPortfolio/SelectedPortfolio";
import ConfirmPortfolio from "./component/confirmPortfolio/ConfirmPortfolio";
import { RRSW } from "src/service/getEfficientFrontier";

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

export interface Holding {
  name: string;
  code: string;
  weight?: number;
}

interface stepContentProp {
  step: number;
  holdings: Holding[];
  selectedPF: RRSW | undefined;
  onChange: (name: string, value: number) => void;
  onDelete: (name: string) => void;
  onAdd: (name: string, code: string) => void;
  onChangeSelectedPF: (PF: RRSW) => void;
}

function getStepContent({ step, holdings, selectedPF, onChange, onDelete, onAdd, onChangeSelectedPF }: stepContentProp) {
  switch (step) {
    case 0:
      return <StockChipGroup holdings={holdings} onChange={onChange} onDelete={onDelete} onAdd={onAdd} />;
    case 1:
      return <SelectedPortfolio holdings={holdings} selectedPF={selectedPF} onChangeSelectedPF={onChangeSelectedPF} />;
    case 2:
      return <ConfirmPortfolio holdings={holdings} selectedPF={selectedPF} />;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Choose Stock", "Select Portfolio", "Confirm Portfolio"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const testHoldings = [
    { name: "SK하이닉스", code: "003550" },
    { name: "LG", code: "005380" },
    { name: "현대차", code: "036570" },
    { name: "삼성전자", code: "035720" },
    { name: "한국전력", code: "000660" },
    { name: "카카오", code: "015760" },
    { name: "엔씨소프트", code: "005930" },
    { name: "셀트리온", code: "068270" },
  ];
  const [holdings, setHoldings] = React.useState<Holding[]>(testHoldings);

  const onChange = (name: string, value: number) => {
    let updateList = [...holdings];
    updateList = updateList.map((item) => {
      return item.name !== name ? item : { name: item.name, code: item.code, weight: value };
    });
    setHoldings(updateList);
  };

  const onAdd = (name: string, code: string) => {
    if (holdings.find((item: Holding) => item.name === name || item.code === code)) return;
    let updateList = [...holdings];
    updateList.push({ name: name, code: code });
    setHoldings(updateList);
  };

  const onDelete = (name: string) => {
    let updateList = [...holdings];
    updateList = updateList.filter((item) => {
      return item.name !== name;
    });
    setHoldings(updateList);
  };

  const [selectedPF, setSelectedPF] = React.useState<RRSW>();
  const onChangeSelectedPF = (portfolio: RRSW) => {
    setSelectedPF(portfolio);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent({
                step: index,
                holdings,
                selectedPF,
                onAdd,
                onChange,
                onChangeSelectedPF,
                onDelete,
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
