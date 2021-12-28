import React from 'react'
import './popUp.css'

function Popup({trigger,limit,message,food,setTrigger, setLimit}) {
    console.log(food)
    console.log(limit)
    return (trigger ?
        <div className='popup'>
            <div className='popup-inner'>
                {limit <  9 ? <h3>{food}</h3> : <h3>{message}</h3> && setLimit(0)}
                <button className='cloese-btn' onClick={()=>{setTrigger(false)}}>close</button>
            </div>
        </div> : ""
    )
}

export default Popup
