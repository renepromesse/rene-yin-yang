import React from "react"

const Card=(props)=>{
    return(
        <>
        <div className="bg-[#D9D9D9] w-[362px] h-[392px]" onClick={props.onClick} >
            <h1>{props.name}</h1>

        </div>
        
        </>
    )
}
export default Card