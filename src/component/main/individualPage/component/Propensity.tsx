import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import WithRoundTitle from "src/component/common/hoc/WithRoundTitle";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
}));

interface AnswerGroupProp {
  question: string;
  userInfo?: string | undefined;
  type: string;
  answers: string[];
  handleUserInfo: (type: string, value: string) => void;
}

function AnswerGroup({ question, userInfo, type, answers, handleUserInfo }: AnswerGroupProp) {
  const [value, setValue] = React.useState(userInfo || answers[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    console.log(type);
    handleUserInfo(type, (event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset" style={{ paddingRight: "50px" }}>
      <FormLabel component="legend">{question}</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        {answers.map((item) => {
          return <FormControlLabel value={item} control={<Radio color="primary" />} label={item} />;
        })}
      </RadioGroup>
    </FormControl>
  );
}

const Propensity = () => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState<any>({
    age: "20~39",
    period: "1년 미만",
    affordableRisk: "상관 없음",
    annualReturn: "10%~30%",
    financialWeight: "50% 이하",
  });
  const handleUserInfo = (key: string, value: string) => {
    const updatedInfo = { ...userInfo };
    if (updatedInfo[key]) updatedInfo[key] = value;
    setUserInfo(updatedInfo);
  };
  return (
    <>
      <div className={classes.root}>
        <div>
          <AnswerGroup
            key={userInfo.age}
            question={"연령대"}
            userInfo={userInfo.age}
            answers={["19세 이하", "20~39", "40~59", "60세 이상"]}
            type={"age"}
            handleUserInfo={handleUserInfo}
          />
          <AnswerGroup
            key={userInfo.period}
            question={"투자 예상 기간"}
            userInfo={userInfo.period}
            type={"period"}
            answers={["1년 미만", "1~3년", "3년 이상"]}
            handleUserInfo={handleUserInfo}
          />
          <AnswerGroup
            key={userInfo.affordableRisk}
            question={"감당 가능한 손실 수준"}
            userInfo={userInfo.affordableRisk}
            type={"affordableRisk"}
            answers={["투자원금 보전", "투자원금 중 일부", "상관 없음"]}
            handleUserInfo={handleUserInfo}
          />
          <AnswerGroup
            key={userInfo.annualReturn}
            question={"목표 연 수익률"}
            userInfo={userInfo.annualReturn}
            type={"annualReturn"}
            answers={["10% 이하", "10%~30%", "30% 이상"]}
            handleUserInfo={handleUserInfo}
          />
          <AnswerGroup
            key={userInfo.financialWeight}
            question={"총 자산대비 금융자산 비중"}
            userInfo={userInfo.financialWeight}
            type={"financialWeight"}
            answers={["10% 이하", "30% 이하", "50% 이하", "70% 이하", "70% 초과"]}
            handleUserInfo={handleUserInfo}
          />
        </div>
      </div>
    </>
  );
};
export const PropensityWithRoundTitle = WithRoundTitle("내 성형", 1.25)(Propensity);
export default Propensity;
