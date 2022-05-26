import React from "react";

type PropsFilterType = {
    setFilter:(filter:string)=>void
}

export const FilterButton = (props:PropsFilterType) => {

    let onclickFilterButton =(nameButton:string)=>{
        props.setFilter(nameButton)
    }

    return (
        <div>
            <button onClick={()=>onclickFilterButton('All')}>All</button>
            <button onClick={()=>onclickFilterButton('Dollars')}>Dollars</button>
            <button onClick={()=>onclickFilterButton('RUBLS')}>RUBLS</button>
        </div>

    )
}