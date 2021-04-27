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

function getSteps() {
  return ["Choose Stock", "Select Portfolio", "Confirm Portfolio"];
}

interface stepContentProp {
  step: number;
  sharesHeldList: any;
  onChange: (name: string, value: number) => void;
  onDelete: (name: string) => void;
  onAdd: (name: string, code: string) => void;
}

function getStepContent({
  step,
  sharesHeldList,
  onChange,
  onDelete,
  onAdd,
}: stepContentProp) {
  console.log(sharesHeldList);
  switch (step) {
    case 0:
      return (
        <StockChipGroup
          stockList={sharesHeldList}
          onChange={onChange}
          onDelete={onDelete}
          onAdd={onAdd}
        />
      );
    case 1:
      return <SelectedPortfolio stockList={sharesHeldList} />;
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [sharesHeldList, setSharesHeldList] = React.useState<
    { name: string; code: string; weight: number }[]
  >([]);

  const onChange = (name: string, value: number) => {
    let updateList = [...sharesHeldList];
    updateList = updateList.map((item) => {
      return item.name !== name
        ? item
        : { name: item.name, code: item.code, weight: value };
    });
    setSharesHeldList(updateList);
  };

  const onAdd = (name: string, code: string) => {
    if (
      sharesHeldList.find(
        (item: { name: string; code: string }) =>
          item.name === name || item.code === code
      )
    )
      return;
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
                onChange,
                onDelete,
                onAdd,
              })}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
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

// import React from "react";
// import StockChipGroup from "./component/stockChipGroup/StockChipGroup";
// import { Paper } from "@material-ui/core";
// import RecommendPortfolio from "./component/recommendPortfolio/RecommendPortfolio";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import EfficientFrontier from "./component/efficientFrontier/EfficientFrontier";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       paddingLeft: "10%",
//       paddingRight: "10%",
//     },
//   })
// );

// const CreatePage = () => {
//   const classes = useStyles();
//   let testList = [
//     { name: "삼성", radio: 50 },
//     { name: "현대", radio: 30 },
//     { name: "엘지", radio: 20 },
//   ];

//   const [sharesHeldList, setSharesHeldList] = React.useState(testList);

//   const onChange = (name: string, value: number) => {
//     let updateList = [...sharesHeldList];
//     updateList = updateList.map((item) => {
//       return item.name !== name ? item : { name: item.name, radio: value };
//     });
//     setSharesHeldList(updateList);
//   };

//   const onAdd = (name: string) => {
//     if (sharesHeldList.find((item) => item.name === name)) return;
//     let updateList = [...sharesHeldList];
//     updateList.push({ name: name, radio: 10 });
//     setSharesHeldList(updateList);
//   };

//   const onDelete = (name: string) => {
//     let updateList = [...sharesHeldList];
//     updateList = updateList.filter((item) => {
//       return item.name !== name;
//     });
//     setSharesHeldList(updateList);
//   };

//   return (
//     <>
//       <Paper elevation={0} className={classes.root}>
//         <StockChipGroup stockList={sharesHeldList} onChange={onChange} onDelete={onDelete} onAdd={onAdd} />
//         <Paper
//           component="ul"
//           style={{
//             margin: "10px 10px 10px 10px",
//           }}
//         >
//           <EfficientFrontier />
//         </Paper>
//         <RecommendPortfolio />
//         {/* <ChartSlider
//         stockList={sharesHeldList}
//         onChange={onChange}
//         onDelete={onDelete}
//       />  */}
//       </Paper>
//     </>
//   );
// };

// export default CreatePage;
