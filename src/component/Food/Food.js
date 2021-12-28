import React,{useState, useEffect} from 'react'
import Popup from './PopUp/Popup';

function Food() {
    const [food, setFood] = useState("")
    const [limit, setLimit] = useState(0)
    const [trigger, setTrigger] = useState(false)

    const message = "Skip this meal, you're not hungry"

    useEffect(()=>{
        const getFoodName = async()=>{
            const data = await getFood()

            const randomIndex = Math.floor(Math.random() * data.length);

            const item = data[randomIndex];

            // console.log(item.title)

            setFood(item.title)
        }

        getFoodName()

    },[trigger])

    const getFood = async()=>{
            const res = await fetch ('http://localhost:5000/Food')
            const data = await res.json()
            return(data)
        }


    return (
        <>
            <div className = "app">
               <div className="card">
                   <h2>Don't know what to eat, press the button</h2>
                   <button onClick={() => { setLimit(limit+1); setTrigger(true)}} >Get a choice</button>
                   <Popup limit={limit} trigger={trigger} food = {food} message={message} setTrigger={setTrigger} setLimit = {setLimit}/>
               </div>
           </div>
        </>
    )
}

export default Food
