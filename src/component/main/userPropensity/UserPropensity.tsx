import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

import AnswerGroup from "./component/AnswerGroup";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontSize: "1rem",
    fontWeight: 500,
    fontFamily: "Noto Sans CJK KR",
  },
  "& > *": {
    fontWeight: 500,
    fontFamily: "Noto Sans CJK KR",
  },
}));

interface UserPropensityProp {
  userInfo: any;
  handleUserInfo: (key: string, value: string) => void;
}

const UserPropensity = ({ userInfo, handleUserInfo }: UserPropensityProp) => {
  const classes = useStyles();
  return (
    <>
      <TreeView className={classes.root} defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
        <TreeItem nodeId="1" label="성향">
          <AnswerGroup
            question={"연령대"}
            userInfo={userInfo.age}
            answers={["19세 이하", "20~39", "40~59", "60세 이상"]}
            type={"age"}
            handleUserInfo={handleUserInfo}
          />
          <AnswerGroup
            question={"투자 예상 기간"}
            userInfo={userInfo.period}
            type={"period"}
            answers={["1년 미만", "1~3년", "3년 이상"]}
            handleUserInfo={handleUserInfo}
          />
          <AnswerGroup
            question={"감당 가능한 손실 수준"}
            userInfo={userInfo.affordableRisk}
            type={"affordableRisk"}
            answers={["투자원금 보전", "투자원금 중 일부", "상관 없음"]}
            handleUserInfo={handleUserInfo}
          />
          <AnswerGroup
            question={"목표 연 수익률"}
            userInfo={userInfo.annualReturn}
            type={"annualReturn"}
            answers={["10% 이하", "10%~30%", "30% 이상"]}
            handleUserInfo={handleUserInfo}
          />
          <AnswerGroup
            question={"총 자산대비 금융자산 비중"}
            userInfo={userInfo.financialWeight}
            type={"financialWeight"}
            answers={["10% 이하", "30% 이하", "50% 이하", "70% 이하", "70% 초과"]}
            handleUserInfo={handleUserInfo}
          />
        </TreeItem>
      </TreeView>
    </>
  );
};

export default UserPropensity;
