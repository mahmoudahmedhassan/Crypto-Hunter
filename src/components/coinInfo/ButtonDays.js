import { React ,useState} from "react";
import "./conisinfo.css";

function ButtonDays({ setDays}) {
    const [active,setActive] =useState(1);
  
    const Days=[
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

    ]

     const handelClick =(value)=>{
        setDays(value);
    }
    const activeClass =(id)=>{
          setActive(id)
    }
   return (
    <div className="ButtonDays">
 
      {Days.map((day) => (
        <button key={day.id} onClick={()=> activeClass(day.id)}className={active===day.id ? 'bb':''} >
          <span  onClick={()=> handelClick(day.value)} >{day.day}</span>
        </button>
      ))}

    </div>
  );
}

export default ButtonDays;
