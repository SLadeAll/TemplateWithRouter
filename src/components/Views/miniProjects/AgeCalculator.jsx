import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Button, Input } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";

const useStyles = makeStyles({
  input: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});

const AgeCalculator = (props) => {
  const classes = useStyles();
  const [days, setDays] = useState("- -");
  const [months, setMonths] = useState("- -");
  const [years, setYears] = useState("- -");
  return (
    <div className="ageContainer">
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <p>Day</p>
          <Input
            className={`input ${classes.input}`}
            id="outlined-basic"
            type="number"
            placeholder="DD"
            maxLength="2"          />
        </Grid>
        <Grid item xs={3}>
          <p>Month</p>
          <Input
            className={`input ${classes.input}`}
            id="outlined-basic"
            placeholder="MM"
            type="number"
            variant="outlined"
            maxLength="2" 
          />
        </Grid>
        <Grid item xs={3}>
          <p>Year</p>
          <Input
            className={`input ${classes.input}`}
            id="outlined-basic"
            placeholder="YYYY"
            type="number"
            variant="outlined"
            maxLength="2"          />
        </Grid>
      </Grid>
      <div className="resultInput">
        <hr />
        <Button className="button">
          <Icon path={mdiArrowDown} color={"#fff"} size={2} />
        </Button>
      </div>
      <div className="ageResult">
        <h1>
          {" "}
          <span className="results">{years}</span> Years
        </h1>
        <h1>
          {" "}
          <span className="results">{months}</span> Months
        </h1>
        <h1>
          {" "}
          <span className="results">{days}</span> Days
        </h1>
      </div>
    </div>
  );
};

export default AgeCalculator;
