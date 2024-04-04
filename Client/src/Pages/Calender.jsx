import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import SimpleReactCalendar from "simple-react-calendar";

function Calender({ setCheckIn, setCheckOut }) {
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setstartDate(e.target.value);
    
  };
  const handleChangeEnd = (e) => {
    setendDate(e.target.value);
    
  };
  useEffect(() => {
    setCheckIn(startDate);
    setCheckOut(endDate);
  }, [startDate, endDate]);

  return (
    <div>
      <h5 className="font-bold text-2xl my-3">Calender</h5>
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg text-gray-500 my-1">from</h2>
          <input
            className="rounded my-1"
            type="date"
            onChange={handleChange}
            ref={dateInputRef}
          />
          <p className="text-sm my-1">
            Check-In date: {startDate ? startDate : "--/--/--"}
          </p>
        </div>
        <div>
          <h2 className="text-lg text-gray-500 my-1">To</h2>
          <input
            className="rounded my-1"
            type="date"
            onChange={handleChangeEnd}
            ref={dateInputRef}
          />
          <p className="text-sm my-1">
            check-out date: {endDate ? endDate : "--/--/--"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Calender;
