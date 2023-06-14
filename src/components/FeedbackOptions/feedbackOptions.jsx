export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
        <h3>Please leave feedback</h3>
        {options.map((option) => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };
  