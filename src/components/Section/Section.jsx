import s from "./Section.module.css";

export default function Section({ children }) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Please, leave feedback!</h1>
      {children}
    </section>
  );
}
