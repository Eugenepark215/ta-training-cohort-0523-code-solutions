export function Menu(props) {
  const menuNames = props.array.map((element, index) => (
    <li key={index} onClick={(e) => props.onCustomClick(e)} value={index}>
      {element}
    </li>
  ));
  return (
    <div className={`column ${props.className}`}>
      <h1 className="padding-left">Menu</h1>
      <ul>{menuNames}</ul>
    </div>
  );
}
