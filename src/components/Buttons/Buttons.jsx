import {useState} from 'react';
import s from './Buttons.module.css';

export default function FeedbackOptions({handleIncrement, state}) {
  const [top, setTop] = useState('0px');
  const [left, setleft] = useState('0px');
  const [width, setWidth] = useState('0px');
  const [height, setHeight] = useState('0px');

  // let keys = Array.from(state.keys());
  let keys = Object.keys(state);
  const arrRefs = [];

  const calcPosBlink = (e, i, key) => {
    let maxSize = Math.max(arrRefs[i].clientWidth, arrRefs[i].clientHeight);
    let coords = arrRefs[i].getBoundingClientRect();
    let left = e.clientX - Math.round(coords.left) - maxSize / 2 + 'px';
    let top = e.clientY - Math.round(coords.top) - maxSize / 2 + 'px';

    setTop(top);
    setleft(left);
    setWidth(maxSize + 'px');
    setHeight(maxSize + 'px');

    handleIncrement(key);
  };

  return (
    <div className={s.container}>
      {keys.map((key, i) => {
        return (
          <button
            id={key}
            ref={node => arrRefs.push(node)}
            key={key}
            type="button"
            className={s.button}
            onMouseDown={e => calcPosBlink(e, i, key)}
          >
            {key}
            <div
              className={s.blink}
              style={{top: top, left: left, width: width, height: height}}
            ></div>
          </button>
        );
      })}
    </div>
  );
}
