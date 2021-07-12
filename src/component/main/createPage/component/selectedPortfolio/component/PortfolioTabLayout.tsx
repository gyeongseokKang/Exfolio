import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TapEfficientFrontier from "./tapComponent/TapEfficientFrontier";
import TapRecommendPortfolio from "./tapComponent/TapRecommendPortfolio";
import { FrontierData, RRSW } from "src/service/getEfficientFrontier";
import TapEfficientFrontierAI from "./tapComponent/TapEfficientFrontierAI";
import { ETFData } from "src/service/getSimilarETF";
import TapSimilarETF from "./tapComponent/TapSimilarETF";
import { Holding } from "../../../CreatePage";
import WithLoading from "src/component/main/common/hoc/WithLoading";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
    "& span": {
      fontSize: "1rem",
    },
  },
}));

interface PortfolioTabLayoutProp {
  holdings: Holding[];
  handleSelectedPF: (portfolio: RRSW) => void;
  frontierData: FrontierData | undefined;
  frontierAIData: FrontierData | undefined;
  similarETFData: ETFData[] | undefined;
}

const TapEfficientFrontierWithLoading = WithLoading("포트폴리오 분석중", "900px", "508px")(TapEfficientFrontier);
const TapEfficientFrontierAIWithLoading = WithLoading("AI 분석중...", "900px", "508px")(TapEfficientFrontierAI);
const TapRecommendPortfolioWithLoading = WithLoading("Dr.폴리오 추천중...", "900px", "508px")(TapRecommendPortfolio);
const TapSimilarETFWithLoading = WithLoading("ETF 분석중...", "900px", "508px")(TapSimilarETF);

export default function PortfolioTabLayout({
  holdings,
  frontierData,
  frontierAIData,
  similarETFData,
  handleSelectedPF,
}: PortfolioTabLayoutProp) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="리스크 vs. 보상" {...a11yProps(0)} />
          <Tab label="(AI 기반) 리스크 vs. 보상" {...a11yProps(1)} />
          <Tab label="Dr.폴리오 추천" {...a11yProps(2)} />
          <Tab label="관련 ETF 추천" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TapEfficientFrontierWithLoading
            loading={frontierData === undefined}
            handleSelectedPF={handleSelectedPF}
            holdings={holdings}
            frontierData={frontierData!}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TapEfficientFrontierAIWithLoading
            loading={frontierAIData === undefined}
            handleSelectedPF={handleSelectedPF}
            holdings={holdings}
            frontierData={frontierAIData!}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TapRecommendPortfolioWithLoading
            loading={frontierData === undefined}
            handleSelectedPF={handleSelectedPF}
            recommnedData={frontierData!}
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <TapSimilarETFWithLoading
            loading={similarETFData === undefined}
            handleSelectedPF={handleSelectedPF}
            holdings={holdings}
            similarETFData={similarETFData!}
          />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
