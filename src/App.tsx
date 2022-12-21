import React, {useState} from 'react';
import './App.css';

function App() {
   const [value, setValue] = useState(0)

   const onClickIncHandler = () => {
      setValue(value + 1)
   }

   const setToLocalStorage = () => {
      sessionStorage.setItem('counterValue', JSON.stringify(value))
   }

   return (
      <div className="App">
         <h3>{value}</h3>
         <button onClick={onClickIncHandler}>INC</button>
         <button onClick={setToLocalStorage}>setToLocalStorage</button>
      </div>
   );
}

export default App;
