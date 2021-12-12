import React from "react";
import './pagination.css'
import Pagination from "@material-ui/lab/Pagination";
export default function CustomPagination({setPage,page,handelSearch}) {

  const styleing ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    paddingBottom: '50px',
   }
  
  // const handleChange = ({target}) => {
  //        window.scroll(0, 0);
  //        setPage(target.value);
  //       console.log((target.value))
  // };

  return (
    <div style={styleing}>
         <Pagination
           count={(Math.ceil(handelSearch().length /10)).toFixed(0) } 
           color="primary"
           onChange={(_,value)=>{setPage(value);window.scroll(0,600)}}
           value={page}
        />
     </div>
  );
}