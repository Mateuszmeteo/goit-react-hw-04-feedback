import React from "react";
// import React, { Component } from "react";
import { Statistics } from "./statistics/statistics";
import { FeedbackOptions } from "./FeedbackOptions/feedbackOptions";
import { Section } from "./section/section";
import { Notification } from "./notification/notification";




export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }

  handleButtonClick = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const startFeedback = totalFeedback > 0

    return (
      <div>
        <Section>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>

        <Section>
          {startFeedback ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
          ) : (
            // <p>test</p>;
            <Notification />
            
          )
        }
          
        </Section>
      </div>
    );
  };  
}

// export default App;





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
