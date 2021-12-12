import { React, useState } from "react";
import "./conisinfo.css";

function ButtonDays({ setDays, days }) {
  const [data, setData] = useState({
    days: [
      {
        day: "24 Hours",
        value: "1",
        id: 1,
      },
      {
        day: "30 Days",
        value: "30",
        id: 2,
      },
      {
        day: "3 Month",
        value: "90",
        id: 3,
      },
      {
        day: "1 Year",
        value: "365",
        id: 4,
      },
    ],
    active: null,
  });
  const handelClick = (value,id) => {
    setDays(value);
    setData({ ...data, active: data.days.id });
   };
  const hhh = (id) => {
    if (data.days.id === data.active) {
      return "on";
    } else {
      return "off";
    }
  };
  return (
    <div className="ButtonDays">
      {data.days.map((day) => (
        <button key={day.id} onClick={() => handelClick((day.value ,day.id))}>
          <span className={hhh(day.id)}>{day.day}</span>
        </button>
      ))}
    </div>
  );
}

export default ButtonDays;
