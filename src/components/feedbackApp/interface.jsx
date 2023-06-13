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

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage = () => {
        const {good} = this.state
        const totalFeedback = this.countTotalFeedback()
        if (totalFeedback === 0) {
            return 0
        }
        return Math.round((good/totalFeedback)*100)
    }


    render() {
        const { good, neutral, bad} = this.state
        // const params = this.state 
        const totalFeedback = this.countTotalFeedback()
        const positiveProcentage = this.countPositiveFeedbackPercentage()

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
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positiveProcentage}%</p>
        </div>
    )
    }
    
}

export default Interface;



////====================================///////
    // countPositiveFeedbackPercentage = () => {
    //     const { good } = this.state;
    //     const totalFeedback = this.countTotalFeedback();
    //     if (totalFeedback === 0) {
    //       return 0;
    //     }
    //     return Math.round((good / totalFeedback) * 100);
    //   };

    // countPositiveFeedbackPercentage = () => {
    //     const {good, neutral, bad} = this.state
    //     return Math.round((good/(good + neutral + bad ))*100)
    // }

