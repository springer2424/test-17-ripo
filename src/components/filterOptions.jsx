import React from 'react'
import FilterCards from './filterCards'
import './filterOptions.css'

function filterOptions({setFilterT}) {
  return (
    <>
    <div className='control'>
    <div onClick={() => setFilterT("all")}>
    <FilterCards
    filterby={"all"}
    
    />
    </div>
    <div onClick={() => setFilterT("danderes")}>
    <FilterCards
    filterby={"danderes"}
    
    />
    </div>
    <div onClick={() => setFilterT("active")}>
        
    <FilterCards
    filterby={"active"}
    />
    </div>
    <div onClick={() => setFilterT("quiet")}>
    <FilterCards
    filterby={"quiet"}
    />
    </div>
    <div onClick={() => setFilterT("dead")}>
    <FilterCards
    filterby={"dead"}
    />
    </div>
    <div onClick={() => setFilterT("agent")}>
    <FilterCards
    filterby={"agent"}
    />
    </div>
    </div>
    

    
    </>
  )
}

export default filterOptions