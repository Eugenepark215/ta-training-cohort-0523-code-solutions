export function Menu(props) {
  const menuNames = props.array.map((element, index) => (
    <li key={index} onClick={props.onCustomClick}>
      {element}
    </li>
  ));
  return (
    <div className="column">
      <h1>Menu</h1>
      <ul>{menuNames}</ul>
    </div>
  );
}
