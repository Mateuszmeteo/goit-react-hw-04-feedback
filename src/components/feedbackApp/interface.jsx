import React from "react"
import { Component } from "react"

class Interface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
          }
    }


    handleButtonClick = (type) => {
        this.setState((prevState) => (
            {[type]:prevState[type] + 1}
        ))
    }

    // countTotalFeedback()

    // countPositiveFeedbackPercentage()




    render() {
        const { good, neutral, bad} = this.state
        // const params = this.state 

        return(
        <div>
            <h3>Please leave feedback</h3>
            <button onClick={() => this.handleButtonClick('good')}>Good</button>
            <button onClick={() => this.handleButtonClick('neutral')}>Neutral</button>
            <button onClick={() => this.handleButtonClick('bad')}>Bad</button>
            <h3>Statistic</h3>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
    }
    
}

export default Interface;