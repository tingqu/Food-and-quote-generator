import React from 'react'
import {Link } from 'react-router-dom'
import './home.css'

function Home() {
        const LinkStyle = { 
        textDecoration:'none',
        color:'Black'
    }
    return (
            <div className='container'>
                <div className='Home'>
                    <Link to="/" style={LinkStyle}>Home</Link>
                </div>
                <div className='quoteContainer'>
                    <Link to='/quote'>
                        <button>
                            Get a quote
                        </button>
                    </Link>
                </div>
                <div className='foodContainer'>
                    <Link to='/food'>
                        <button>
                            Get a food
                        </button>
                    </Link>
                </div>
            </div>
    )
}

export default Home
