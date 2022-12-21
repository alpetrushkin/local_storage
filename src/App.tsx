import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
   const [value, setValue] = useState(0)

   useEffect(() => {
      let valueAsString = localStorage.getItem('counterValue')
      if (valueAsString) {
         let newValue = JSON.parse(valueAsString)
         setValue(newValue)
         console.log(newValue + 'newValue')
      }
   }, [])

   const onClickIncHandler = () => {
      const newValue = value + 1
      setValue(newValue)
      localStorage.setItem('counterValue', JSON.stringify(newValue))
      console.log(newValue + 'value')
   }

   return (
      <div className="App">
         <h3>{value}</h3>
         <button onClick={onClickIncHandler}>INC</button>
      </div>
   );
}

export default App;
