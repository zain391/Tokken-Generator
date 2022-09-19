import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { ErrorMessage} from "formik";
export default function MaterialUiDate({setField, date_Time}) {
  const [value, setValue] = React.useState(dayjs(date_Time, "YYYY/MM/DD"));

  const handleChange = (value) => {
    setValue(value);
    setField("date_Time",value)
    
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}  sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch',  },
      }}>
        <Stack spacing={3} className="mui">
          <DateTimePicker

            value={value}
            name="date_Time"
            onChange={handleChange}
            renderInput={(params) => <TextField    {...params} />}
          />
        </Stack>
        <p className="text-red-500 text-xs">
                          <ErrorMessage name="date_Time" component="div" />
                        </p>
      </LocalizationProvider>

      
    </>
  );
}

