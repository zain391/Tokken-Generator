import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function MaterialUiRange({decimals,change,blur}) {
  return (
    <Box sx={{ width: 700 }}>
      <Slider
      style={{"color":"#8e44ad"}}
        aria-label="Temperature"
        defaultValue={18}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={6}
        max={18}
        name="decimals"
        value={decimals}
        onChange={change}
        onBlur={blur}
      />
    </Box>
  );
}
