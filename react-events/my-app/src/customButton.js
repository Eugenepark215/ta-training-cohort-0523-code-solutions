export function CustomButton({ text, color }) {
  function handleClick() {
    window.alert(text);
  }
  return (
    <button className={color} onClick={handleClick}>
      {text}
    </button>
  );
}
