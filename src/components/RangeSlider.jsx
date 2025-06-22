import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export default function RangeSlider({ label, MinValue, MaxValue, step, unit , setRange ,value, setValue }) {
  // const [value, setValue] = useState([MinValue, MaxValue]);

  useEffect(()=>{
    setRange(value);
  },[value])
  
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (index, val) => {
    let num = Number(val);
    if (isNaN(num)) return;
    if (num < MinValue) num = MinValue;
    if (num > MaxValue) num = MaxValue;

    const newValues = [...value];
    newValues[index] = num;

    // Prevent overlap
    if (index === 0 && num >= newValues[1]) {
      newValues[0] = newValues[1] - step;
    }
    if (index === 1 && num <= newValues[0]) {
      newValues[1] = newValues[0] + step;
    }

    setValue(newValues);
  };

  const generateMarks = () => {
    const marks = [];
    for (let i = MinValue; i <= MaxValue; i += step) {
      marks.push({ value: i });
    }
    return marks;
  };

  return (
    <Box>
      <Typography gutterBottom fontWeight="bold" className="fs-5" >
        {label}
      </Typography>

      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleSliderChange}
        min={MinValue}
        max={MaxValue}
        step={step}
        marks={generateMarks()}
        valueLabelDisplay="off"
         disableSwap
       
        sx={{
          height: 6,
          paddingBottom: "0",
          "& .MuiSlider-rail": {
            backgroundColor: "#dee2e6 !important",
            opacity: 1,
            height: 6,
          },
          "& .MuiSlider-track": {
            backgroundColor: 'rgb(30, 79, 188)',
            height: 6,
          },
          "& .MuiSlider-thumb": {

            backgroundColor: 'rgb(30, 79, 188)',
          width:'15px ',
          height:'15px'
          },
          "& .MuiSlider-mark": {
            width: 4,
            height: 4,
            borderRadius: "50%",
            // backgroundColor: '#dee2e6',
            backgroundColor: 'rgb(30, 79, 188)',
            top: "50%",
            transform: "translateY(-50%)",
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "5px",
          mt: "0px",
        }}
      >
        <Typography
          variant="body2"
          color="text-black" 
          className="fs-6"
        >
          {`${value[0]} ${unit}`}
          
          </Typography>
        <Typography
          variant="body2"
          color="text-black"
          className="fs-6"
        >
          {`${value[1]} ${unit}`}
          
          </Typography>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
        style={{ marginTop: "20px" }}
      >
        <TextField
          type="number"
          className="w-100"
          value={value[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          inputProps={{
            step: step,
            min: MinValue,
            max: value[1] - step,
            style: { padding: "10px 5px" },
          }}
          fullWidth
          InputProps={{
            endAdornment: (
              <span className="p-0" style={{ marginLeft: 0 }}></span>
            ),
          }}
        />
        <TextField
          className="w-100"
          type="number"
          value={value[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          inputProps={{
            step: step,
            min: value[0] + step,
            max: MaxValue,
            style: { padding: "10px 5px", paddingRight: "0" },
          }}
          fullWidth
          InputProps={{
            endAdornment: <span style={{ marginLeft: 0 }}> </span>,
          }}
        />
      </Box>
    </Box>
  );
}
