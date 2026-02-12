
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/table'
import FilterOptions from './components/filterOptions'
import { useState } from 'react'

function App() {
  const [filterT, setFilterT] = useState("all")
  

  return (
    <>
      
      <FilterOptions
      setFilterT={setFilterT}
      />
      <Table
      filterT={filterT}
      />
    </>
  )
}

export default App
