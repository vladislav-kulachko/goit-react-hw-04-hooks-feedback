import { useState } from "react";

import "./App.css";
import FeedbackOptions from "./components/Buttons/Buttons";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notify from "./components/Notification/Notification";

export default function App() {
  const [state, setState] = useState(
    new Map([
      ["good", 0],
      ["neutral", 0],
      ["bad", 0],
    ])
  );

  const [currentGood, setCurrentGood] = useState(1);
  const [currentNeutral, setCurrentNeutral] = useState(1);
  const [currentBad, setCurrentBad] = useState(1);

  const handleIncrement = (currentKey) => {
    if (currentKey === "good") {
      setCurrentGood((s) => s + 1);
      setState(state.set(currentKey, currentGood));
    } else if (currentKey === "neutral") {
      setCurrentNeutral((s) => s + 1);
      setState(state.set(currentKey, currentNeutral));
    } else if (currentKey === "bad") {
      setCurrentBad((s) => s + 1);
      setState(state.set(currentKey, currentBad));
    }
  };

  return (
    <Section>
      <FeedbackOptions
        state={state}
        handleIncrement={handleIncrement}
      ></FeedbackOptions>
      <Statistics state={state}>
        <Notify message={"O my God, urgently click!"}></Notify>
      </Statistics>
    </Section>
  );
}
