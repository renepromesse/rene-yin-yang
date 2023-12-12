import React from "react"
const Card=(props)=>{
    return(
        <>
        <div className=" flex w-[446px] h-[292px] rounded-lg" onClick={props.onClick} >
            <div className="w-[180px] h-full rounded-lg">
                <img src={props.image} style={{height:"100%",borderRadius:"10px 0px 0px 10px"}} />

            </div>
            <div className="w-[180px] h-full bg-white rounded-slg" style={{borderRadius:"0px 10px 10px 0px"}}>
           <div className="h-20 w-full"> <h1 className="text-xl text-center pt-2">{props.name}</h1></div>
           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="absolute mt-[25.8px] -ml-[15px] rounded-sm">
  <path d="M15 15H1.52878C0.622244 15 0.183487 13.8905 0.84484 13.2705L15 0V15Z" fill="#CDCDCD"/>
</svg>
           {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="14" viewBox="0 0 25 14" fill="none" className="absolute mt-7 -ml-4">
<path d="M25 14H1.23607C0.180843 14 -0.154966 12.5775 0.788855 12.1056L25 0V14Z" fill="#CDCDCD"/>
</svg> */}
            <div className="bg-[#D9D9D9] h-10 w-[109%] mt-10 -ml-[13.9px] rounded-[2px,0]">
              

            </div>
            <div className="m-2">
            <p> {props.details}</p>
            </div>
            </div>

        </div>
        
        </>
    )
}
export default Card