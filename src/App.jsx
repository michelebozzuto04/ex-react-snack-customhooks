import React from 'react'
import useSwitch from './useSwitch'
import useDate from './useDate'
import useCustomPointer from './useCustomPointer';
import useKeyPress from './useKeyPress';

function App() {

  /* const [isOn, toggle] = useSwitch();

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  ) */


  /* const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate?.toLocaleString()}</p>
    </div>
  ); */


  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App