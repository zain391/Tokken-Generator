import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function MaterialUiDate({setField, date_Time}) {
  const [value, setValue] = React.useState(dayjs(date_Time, "YYYY/MM/DD"));

  const handleChange = (value) => {
    setValue(value);
    // console.log(setField,"setField");
    setField("date_Time",value)
    
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} className="mui">
          <DateTimePicker
          className="date_time"
            label="Date&Time picker"
            value={value}
            name="date_Time"
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>

      
    </>
  );
}


{/* <div
        class="grow h-14 w-62 ..."
        style={{ position: "absolute", bottom: "33px" }}
      >
        <div className="   ">
          <div className="md:mr-3  whitespace-nowrap  items-center md:space-x-3  MuiBox-root css-1k88e4i">
            <div className="w-full md:mr-3  mt-2  ">
              <div className>
                <label
                  htmlFor="vesting"
                  className="block text-gray-700 text-sm font-medium"
                >
                  Vesting
                </label>
                <div className="flex items-center">
                  <div className="relative w-full">
                    <input
                      onChange={handleChange}
                      onBlur={props.blur}
                      value={props.value}
                      name={`utc.[${props.index}].vesting`}
                      type="number"
                      placeholder="Vesting"
                      className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md  uppercase focus:ring-blue-500 sm:text-sm grow h-14 w-64 "
                      defaultValue={2}
                    />
                    <p className="text-black font-bold  absolute right-40 top-[25%]">
                      %
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}