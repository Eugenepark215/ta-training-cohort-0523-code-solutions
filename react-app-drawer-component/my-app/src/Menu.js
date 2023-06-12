export function Menu(props) {
  const menuNames = props.array.map((element, index) => (
    <li key={index} onClick={props.onCustomClick} value={element}>
      {element}
    </li>
  ));
  return (
    <div className={`column ${props.className}`}>
      <h1>Menu</h1>
      <ul>{menuNames}</ul>
    </div>
  );
}
