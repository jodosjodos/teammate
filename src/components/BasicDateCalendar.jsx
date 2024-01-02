// BasicDateCalendar.jsx

import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar({ onDateSelect }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-[80%] h-[80%]">
        <DateCalendar
          className="w-full"
          onChange={(newDate) => onDateSelect(newDate)}
        />
      </div>
    </LocalizationProvider>
  );
}
