import s from "./Statistics.module.css";

export default function Statistics({ state, children }) {
  const values = Array.from(state.values());
  const keys = Array.from(state.keys());

  const countTotalFeedback = () => {
    const total = values.reduce((a, i) => a + i);
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = values.reduce((a, i) => a + i);
    const posPercent = Math.round((values[0] / total) * 100);
    return posPercent;
  };

  return (
    <>
      {values.find((value) => value > 0) ? (
        <div className={s.container}>
          <h2 className={s.title}>Statistics:</h2>
          <ul className={s.list}>
            {keys.map((key, i) => (
              <li key={key} className={s.item}>
                {key.slice(0, 1).toUpperCase() + key.slice(1)}:{" "}
                <span className={s.value}>{values[i]}</span>
              </li>
            ))}
            <li className={s.item}>
              Total: <span className={s.value}>{countTotalFeedback()}</span>
            </li>
            <li className={s.item}>
              Positive feedback:{" "}
              <span className={s.value}>
                {countPositiveFeedbackPercentage()}%
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
