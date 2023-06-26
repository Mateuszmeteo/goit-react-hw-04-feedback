import React, { useState} from "react";


import { Statistics } from "./statistics/statistics";
import { FeedbackOptions } from "./FeedbackOptions/feedbackOptions";
import { Section } from "./section/section";
import { Notification } from "./notification/notification";



export const App = () => {
  const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0
  })


  const handleButtonClick = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1
    }))
  }

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };


    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    const options = Object.keys(feedback);
    const startFeedback = totalFeedback > 0

    return (
      <div>
        <Section>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleButtonClick}
          />
        </Section>

        <Section>
          {startFeedback ? (
            <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
          ) : (
            <Notification />
          )
        }
        </Section>
      </div>
    );
  };  







//===========================================//
// import React from "react";
// import { Component } from "react";
// // import Interface from "./feedbackApp/interface";

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       {/* React homework template */}
//       {/* <Interface /> */}
//     </div>
//   );
// };


// export class Interface extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           good: 0,
//           neutral: 0,
//           bad: 0
//         }
//   }


//   handleButtonClick = (type) => {
//       this.setState((prevState) => (
//           {[type]:prevState[type] + 1}
//       ))
//   }

//   countTotalFeedback = () => {
//       const {good, neutral, bad} = this.state
//       return good + neutral + bad
//   }

//   countPositiveFeedbackPercentage = () => {
//       const {good} = this.state
//       const totalFeedback = this.countTotalFeedback()
//       if (totalFeedback === 0) {
//           return 0
//       }
//       return Math.round((good/totalFeedback)*100)
//   }


//   render() {
//       const { good, neutral, bad} = this.state
//       // const params = this.state 
//       const totalFeedback = this.countTotalFeedback()
//       const positiveProcentage = this.countPositiveFeedbackPercentage()

//       return(
//       <div>
//           <h3>Please leave feedback</h3>
//           <button onClick={() => this.handleButtonClick('good')}>Good</button>
//           <button onClick={() => this.handleButtonClick('neutral')}>Neutral</button>
//           <button onClick={() => this.handleButtonClick('bad')}>Bad</button>
//           <h3>Statistic</h3>
//           <p>Good: {good}</p>
//           <p>Neutral: {neutral}</p>
//           <p>Bad: {bad}</p>
//           <p>Total: {totalFeedback}</p>
//           <p>Positive feedback: {positiveProcentage}%</p>
//       </div>
//   )
//   }
  
// }

// // export default Interface;
