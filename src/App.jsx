import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ShowAnimals from './components/layouts/ShowAnimals.jsx';
import AnimalForm from './components/forms/AnimalForm.jsx';
import EditAnimalForm from './components/forms/EditAnimalForm.jsx';
import AdminAnimals from './components/layouts/AdminAnimal.jsx';
import Header from './components/layouts/header.jsx';
import AnimalsView from './components/pages/AnimalsView.jsx';
import AdminView from './components/pages/AdminView.jsx';
import AnimalDetailsPage from './components/pages/AnimalDetailsPage.jsx'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AnimalsView />} />
        <Route path="/ShowAnimals" element={<ShowAnimals />} />
        <Route path="/EditAnimal/:id" element={<EditAnimalForm />} />
        <Route path="/AnimalForm" element={<AnimalForm />} />
        <Route path='/AdminAnimals' element={<AdminAnimals />} />
        <Route path='/AnimalsView' element={<AnimalsView />} />
        <Route path='/AdminView' element={<AdminView />} />
        <Route path="/animals/:animalId" element={<AnimalDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

