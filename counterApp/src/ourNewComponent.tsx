import React from "react";

type propType = {
    ourState: number;
    handleClick: any;
}

const HomeUpdate: React.FC<propType> = ({ ourState, handleClick}) => {

    return (
        <>
        <div>our State {ourState} </div>
        <button onClick = { handleClick } className="border-solid border border-red-700 rounded px-8 py-1"> Increment
         
        </button>
        
        </>
    )
}

export default HomeUpdate;