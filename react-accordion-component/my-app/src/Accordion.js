// import { useState } from "react";
export function Accordion(props) {
  // const [handleClick, setClick] = useState('');
  const topicText = props.array.map((element, index) => (
    <li key={index}>
      <div className="topic">{element.topic}</div>
      <div className="text">{element.text}</div>
    </li>
  ));
  return <ul>{topicText}</ul>;
}
