import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const STATE_NAME = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementCount = key => {
    if (key === STATE_NAME.GOOD) setGood(pS => pS + 1);
    if (key === STATE_NAME.NEUTRAL) setNeutral(pS => pS + 1);
    if (key === STATE_NAME.BAD) setBad(pS => pS + 1);
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  const haveFeedback = countTotalFeedback() !== 0;

  return (
    <div className="container">
      <Section title="Please leave Feedback" icon={true}>
        <FeedbackOptions
          options={Object.values(STATE_NAME)}
          onLeaveFeedback={incrementCount}
        />
      </Section>
      <Section title="Statistics">
        {haveFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
