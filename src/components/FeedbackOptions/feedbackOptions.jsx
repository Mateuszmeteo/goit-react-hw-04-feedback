import css from './feedbackOption.module.css'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
        <h3>Please leave feedback</h3>
        {options.map((option) => (
          <button className={css.btn} key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };
  

//   export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//     return (
//       <div>
//         <h3>Please leave feedback</h3>
//         <button onClick={() => onLeaveFeedback('good')}>Good</button>
//         <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
//         <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
//       </div>
//     );
//   };
  