import React, { useState } from "react";
import { uploadFile, saveAnimalData} from "../controllers/firebase/firebaseConfig";
import Swal from "sweetalert2";

const AnimalForm = () => {
  const [form, setForm] = useState({
    photo: null,
    name: '',
    age: '',
    sex: '',
    weight: '',
    vaccines: '',
    observations: '',
    offspring: '',
    numberOfOffspring: '',
    type: '',
    status: '',
    birthDate: ''
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
      if (form.photo) {
        photoUrl = await uploadFile(form.photo); // Subir la foto y obtener la URL
      }

      const { photo, ...rest } = form; // Desestructurar el objeto para no incluir `photo`
      const animalData = { ...rest, photoUrl }; // Añadir `photoUrl` en lugar de `photo`

      await saveAnimalData(animalData); // Enviar los datos a Firestore

      Swal.fire({
        title: 'Información',
        text: 'Formulario enviado con éxito!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      
      // Resetear el formulario después del envío exitoso
      setForm({
        photo: null,
        name: '',
        age: '',
        sex: '',
        weight: '',
        vaccines: '',
        observations: '',
        offspring: '',
        numberOfOffspring: '',
        type: '',
        status: '',
        birthDate: ''
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="file" name="photo" id="photo" onChange={handleChange} placeholder="Foto" />
      </div>
      <div>
        <input type="text" name="name" id="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
      </div>
      <div>
        <input type="text" name="age" id="age" value={form.age} onChange={handleChange} placeholder="Edad" />
      </div>
      <div>
        <select name="sex" id="sex" value={form.sex} onChange={handleChange}>
          <option value="" disabled>Sexo</option>
          <option value="male">Macho</option>
          <option value="female">Hembra</option>
        </select>
      </div>
      <div>
        <input type="text" name="weight" id="weight" value={form.weight} onChange={handleChange} placeholder="Peso" />
      </div>
      <div>
        <input type="text" name="vaccines" id="vaccines" value={form.vaccines} onChange={handleChange} placeholder="Vacunas" />
      </div>
      <div>
        <textarea name="observations" id="observations" value={form.observations} onChange={handleChange} placeholder="Observaciones"></textarea>
      </div>
      <div>
        <select name="offspring" id="offspring" value={form.offspring} onChange={handleChange}>
          <option value="" disabled>
            Cría
          </option>
          <option value="yes">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <input type="text" name="numberOfOffspring" id="numberOfOffspring" value={form.numberOfOffspring} onChange={handleChange} placeholder="Número de crías" />
      </div>
      <div>
        <select name="type" id="type" value={form.type} onChange={handleChange}>
          <option value="" disabled>
            Tipo
          </option>
          <option value="novilla">Novilla</option>
          <option value="ternera">Ternera</option>
        </select>
      </div>
      <div>
        <select name="status" id="status" value={form.status} onChange={handleChange}>
          <option value="" disabled>
            Estado
          </option>
          <option value="empty">Vacía</option>
          <option value="pregnant">Preñada</option>
        </select>
      </div>
      <div>
        <input type="date" name="birthDate" id="birthDate" value={form.birthDate} onChange={handleChange} placeholder="Fecha de nacimiento" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AnimalForm;
