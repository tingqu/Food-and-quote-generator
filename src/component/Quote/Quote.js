import React from 'react'
import axios from 'axios'

import './quote.css'

// Function in React
class Quote extends React.Component{
    // this is the class  obejct
    state = {
        advice:''
    };

    componentDidMount(){
        this.fetchAdvice()
    }

    // this is the method that belong to this app class but not the function
    fetchAdvice = ()=> {
        axios.get('https://api.adviceslip.com/advice')
        // reposnse here works like an object and we can go deeper
        .then((response)=>{
            // destrcuting 
            const {advice} = response.data.slip

            // Using the js code to set the clas component to the value
            // if the propety value == value input name, then just omit hthe property name.
            this.setState({advice})
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    render(){
         const {advice} = this.state;

        return(
           <div className = "app">
               <div className="card">
                   <h1 className = "heading">{advice}</h1>
                   <button onClick = {this.fetchAdvice}>
                       <span>New Quote</span>
                   </button>
               </div>
           </div>
        )
    }
}


export default Quote;

