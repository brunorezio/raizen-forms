import React from 'react';
import './App.css';
import Select from './Components/Select'
import countriesLanguages from './countries-languages.json'

console.log({ countriesLanguages })

function App() {
  return (
    <div className="App">
      <Select
        options={countriesLanguages.map(country => country.name)}
        defaultOption="Select Country..."
         />
    </div>
  );
}

export default App;
