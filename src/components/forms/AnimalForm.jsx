import React, { useState } from "react";
import { uploadFile, saveAnimalData } from "../../controllers/firebase/firebaseConfig";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const AnimalForm = () => {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    Foto: null,
    Nombre: '',
    Edad: '',
    Sexo: '',
    Peso: '',
    Vacunas: '',
    Observaciones: '',
    Crias: '',
    Numero_de_crias: '',
    Tipo: '',
    Estado: '',
    Nacimiento: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let photoUrl = '';
      if (form.Foto) {
        photoUrl = await uploadFile(form.Foto);
      }

      const { Foto, ...rest } = form;
      const animalData = { ...rest, photoUrl };

      await saveAnimalData(animalData);

      Swal.fire({
        title: 'Información',
        text: 'Formulario enviado con éxito!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      setForm({
        Foto: null,
        Nombre: '',
        Edad: '',
        Sexo: '',
        Peso: '',
        Vacunas: '',
        Observaciones: '',
        Crias: '',
        Numero_de_crias: '',
        Tipo: '',
        Estado: '',
        Nacimiento: ''
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Error al enviar el formulario',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBack} className='mb-3 ml-3'><i className="fa-solid fa-arrow-left-long text-Turquesa text-md"></i><span className='text-Turquesa text-md ml-1 font-bold'>REGRESAR</span></button>
      <div className="container max-w-2xl mx-auto mt-4 p-4 shadow-lg rounded-lg bg-white ">
        <h2 className="text-2xl font-bold text-center mb-6 text-Turquesa">Añadir animal</h2>
        <form onSubmit={handleSubmit} className="container mx-auto mt-4 p-4">
          <div className="mb-4">
            <input type="file" name="Foto" id="Foto" onChange={handleChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:text-Turquesa hover:file:text-white hover:file:bg-Turquesa" />
          </div>
          <div className="mb-4">
            <input type="text" name="Nombre" id="Nombre" value={form.Nombre} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm" placeholder="Nombre" />
          </div>
          <div className="mb-4">
            <input type="text" name="Edad" id="Edad" value={form.Edad} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm" placeholder="Edad" />
          </div>
          <div className="mb-4">
            <select name="Sexo" id="Sexo" value={form.Sexo} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm">
              <option value="" disabled>Sexo</option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
          </div>
          <div className="mb-4">
            <input type="text" name="Peso" id="Peso" value={form.Peso} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm" placeholder="Peso" />
          </div>
          <div className="mb-4">
            <input type="text" name="Vacunas" id="Vacunas" value={form.Vacunas} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm" placeholder="Vacunas" />
          </div>
          <div className="mb-4">
            <textarea name="Observaciones" id="Observaciones" value={form.Observaciones} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm" placeholder="Observaciones"></textarea>
          </div>
          <div className="mb-4">
            <select name="Crias" id="Crias" value={form.Crias} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm">
              <option value="" disabled>Cría</option>
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-4">
            <input type="text" name="Numero_de_crias" id="Numero_de_crias" value={form.Numero_de_crias} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm" placeholder="Número de crías" />
          </div>
          <div className="mb-4">
            <select name="Tipo" id="Tipo" value={form.Tipo} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm">
              <option value="" disabled>Tipo</option>
              <option value="novilla">Novilla</option>
              <option value="ternera">Ternera</option>
            </select>
          </div>
          <div className="mb-4">
            <select name="Estado" id="Estado" value={form.Estado} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm">
              <option value="" disabled>Estado</option>
              <option value="Vacía">Vacía</option>
              <option value="Preñada">Preñada</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="Nacimiento" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
            <input type="date" name="Nacimiento" id="Nacimiento" value={form.Nacimiento} onChange={handleChange} className="block w-full p-2 border rounded-md shadow-sm" />
          </div>
          <button type="submit" className="w-full p-3 bg-Turquesa text-white rounded-md hover:bg-VerdeOscuro">Enviar</button>
        </form>
      </div>
    </div>

  );
};


export default AnimalForm;
