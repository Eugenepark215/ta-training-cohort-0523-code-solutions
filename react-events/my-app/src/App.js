import './App.css';
import { CustomButton } from './customButton';

function App() {
  function handleCustomClick({ text }) {
    window.alert(text);
  }
  return (
    <div className="App">
      <CustomButton
        text="green"
        color="green"
        onCustomClick={handleCustomClick}
      />
      <CustomButton text="red" color="red" onCustomClick={handleCustomClick} />
      <CustomButton
        text="blue"
        color="blue"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
