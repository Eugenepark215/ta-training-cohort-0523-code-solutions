import { useState } from 'react';
export function Accordion(props) {
  const [handleClick, setClick] = useState('');

  function setToggle(e) {
    if (handleClick === e.target.textContent) {
      setClick('');
    } else {
      setClick(e.target.textContent);
    }
  }

  const topicText = props.array.map((element, index) => (
    <li key={index}>
      <div className="topic" onClick={setToggle}>
        {element.topic}
      </div>
      {element.topic === handleClick && (
        <div className="text">{element.text}</div>
      )}
    </li>
  ));

  return <ul>{topicText}</ul>;
}
