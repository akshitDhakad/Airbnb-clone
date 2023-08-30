import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calender() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div>
      <h1>Calendar Example</h1>
      <Calendar onChange={handleDateChange} value={date} />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
}

export default Calender;
