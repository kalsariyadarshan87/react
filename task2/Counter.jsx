import React, { useState } from 'react'
export default function(){
        const [state,setstate] = useState(0);

        function Inc() {
            setstate(state+1)
        }
        // function der() {
        //     setstate(state-1)
        // }

    return (
        <div>
            <h1>Count is : {state}</h1>
            <button onClick={Inc}>Incrase</button>
            {/* <button onClick={der}>decrease</button> */}
        </div>
    )
}   
