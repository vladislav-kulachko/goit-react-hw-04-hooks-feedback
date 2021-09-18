import {useReducer} from 'react';
import './App.css';
import FeedbackOptions from './components/Buttons/Buttons';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notify from './components/Notification/Notification';

export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'good':
        return {...state, good: state.good + action.payload};

      case 'neutral':
        return {...state, neutral: state.neutral + action.payload};

      case 'bad':
        return {...state, bad: state.bad + action.payload};

      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, {good: 0, neutral: 0, bad: 0});

  const handleIncrement = currentKey => {
    dispatch({type: currentKey, payload: 1});
  };

  // const [state, setState] = useState(
  //   new Map([
  //     ['good', 0],
  //     ['neutral', 0],
  //     ['bad', 0],
  //   ]),
  // );

  // const [currentGood, setCurrentGood] = useState(1);
  // const [currentNeutral, setCurrentNeutral] = useState(1);
  // const [currentBad, setCurrentBad] = useState(1);

  // const handleIncrement = currentKey => {
  //   switch (currentKey) {
  //     case 'good':
  //       setCurrentGood(s => s + 1);
  //       setState(state.set(currentKey, currentGood));
  //       break;
  //     case 'neutral':
  //       setCurrentNeutral(s => s + 1);
  //       setState(state.set(currentKey, currentNeutral));
  //       break;
  //     case 'bad':
  //       setCurrentBad(s => s + 1);
  //       setState(state.set(currentKey, currentBad));
  //       break;
  //     default:
  //       throw new Error();
  //   }
  // };

  return (
    <Section>
      <FeedbackOptions
        state={state}
        handleIncrement={handleIncrement}
      ></FeedbackOptions>
      <Statistics state={state}>
        <Notify message={'O my God, urgently click!'}></Notify>
      </Statistics>
    </Section>
  );
}
