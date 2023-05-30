import './App.css';
import { CustomButton } from './customButton';

function App() {
  return (
    <div className="App">
      <CustomButton text="green" color="green" />
      <CustomButton text="red" color="red" />
      <CustomButton text="blue" color="blue" />
    </div>
  );
}

export default App;
