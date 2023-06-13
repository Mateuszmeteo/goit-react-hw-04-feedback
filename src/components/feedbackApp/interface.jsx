import React from "react"
import { Component } from "react"

class Interface extends Component {
    render() {
        return(
        <div>
            <h3>Please leave feedback</h3>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
            <h3>Statistic</h3>
            <p>Good: 3</p>
            <p>Neutral: 2</p>
            <p>Bad: 2</p>
        </div>
    )
    }
    
}

export default Interface;