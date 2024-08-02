import React from 'react';
import AnimalForm from './components/AnimalForm.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowAnimals from './components/ShowAnimals.jsx';


function App() {
  return (
    <div className="App">
      <h1>Registro de Animales</h1>
      <AnimalForm />
      <h1>Mostrar animales</h1>
      <ShowAnimals />
    </div>
  );
}

export default App;
