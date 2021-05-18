import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

interface AnswerGroupProp {
  question: string;
  userInfo?: string | undefined;
  type: string;
  answers: string[];
  handleUserInfo: (type: string, value: string) => void;
}

export default function AnswerGroup({ question, userInfo, type, answers, handleUserInfo }: AnswerGroupProp) {
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
