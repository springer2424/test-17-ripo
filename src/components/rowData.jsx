import React from 'react'

function rowData({name,organization,attacksCount,status,relationToIsraelSummary,imag}) {
  return (
    <tr>
    <td>{name}</td>
    <td>{organization}</td>
    <td>{attacksCount}</td>
    <td>{status}</td>
    <td>{relationToIsraelSummary}</td>
    <td>{imag}</td>
  </tr>
    
  )
}

export default rowData