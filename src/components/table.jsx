import React from "react";

import './Table.css'
import RowData from "./rowData";
import data from '../data.json'
// console.log(data)

function table({filterT}) {
//   const [filterT, setFilterT] = useState("all")
  function filterbystate(data){
    if(filterT === "all"){
        return data
    }
    if(filterT === "danderes"){
        return data.filter((t) => t.status === "active" && t.status === "active")
    }
    if(filterT === "active"){
        return data.filter((t) => t.status === "active")
    }
    if(filterT === "quiet"){
        return data.filter((t) => t.status === "quiet")
    }
    if(filterT === "dead"){
        return data.filter((t) => t.status === "dead")
    }
    if(filterT === "agent"){
        return data.filter((t) => t.status === "agent")
    }
    
  }
  const filterdData = filterbystate(data)
  return (
    <table>
      <tr>
        <th>name</th>
        <th>organization</th>
        <th>attacksCount</th>
        <th>status</th>
        <th>relationToIsraelSummary</th>
        <th>imag</th>
      </tr>
      {filterdData.map((t,index)=>
      <RowData
      key={index}
      name={t.name}
      organization={t.organization}
      attacksCount={t.attacksCount}
      status={t.status}
      relationToIsraelSummary={t.relationToIsraelSummary}
      imag={t.imag}






      />
)}

    </table>
  );
}

export default table;
