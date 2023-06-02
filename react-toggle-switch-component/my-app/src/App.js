import { useState } from 'react';
function App() {
  const [clicked, setClicked] = useState('OFF');

  function Toggle() {
    return clicked === 'OFF' ? setClicked('ON') : setClicked('OFF');
  }
  return (
    <div className="display-flex">
      <div className={`background background-${clicked}`}>
        <button className={` switch switch-${clicked}`} onClick={Toggle} />
      </div>
      <p className="text">{clicked}</p>
    </div>
  );
}

export default App;
