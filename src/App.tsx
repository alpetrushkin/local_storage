import React, {useState} from 'react';
import './App.css';

function App() {
   const [value, setValue] = useState(0)

   const onClickIncHandler = () => {
      setValue(value + 1)
   }

   const setLocalStorageHandler = () => {
      localStorage.setItem('counterValue', JSON.stringify(value))
      localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
   }

   const getLocalStorageHandler = () => {
      let valueAsString = localStorage.getItem('counterValue')
      if (valueAsString) {
         let newValue = JSON.parse(valueAsString)
         setValue(newValue)
      }
   }

   const clearLocalStorageHandler = () => {
      localStorage.clear()
      setValue(0)
   }

   
   const removeFromItemLocalStorageHandler = () => {
     localStorage.removeItem('counterValue + 1')
   }

   return (
      <div className="App">
         <h3>{value}</h3>
         <button onClick={onClickIncHandler}>INC</button>
         <button onClick={setLocalStorageHandler}>setLocalStorage</button>
         <button onClick={getLocalStorageHandler}>getLocalStorage</button>
         <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
         <button onClick={removeFromItemLocalStorageHandler}>removeFromItemLocalStorage</button>
      </div>
   );
}

export default App;
