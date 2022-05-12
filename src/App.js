import { useState } from 'react';
import './App.css';
import Countries from './components/Countries';

function App() {

  const [showCountry, setShowCountry] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowCountry(!showCountry)}>show / hidde</button>
      {showCountry && <Countries />}
    </div>
  );
}

export default App;
