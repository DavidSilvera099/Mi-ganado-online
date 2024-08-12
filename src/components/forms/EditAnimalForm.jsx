import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { db, uploadFile } from '../../controllers/firebase/firebaseConfig';

const EditAnimalForm = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [animal, setAnimal] = useState({
        photoUrl: '',
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
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fetchAnimal = async () => {
            const animalDoc = doc(db, 'animals', id);
            const data = await getDoc(animalDoc);
            const animalData = data.data();
            setAnimal({
                Nombre: animalData.Nombre || '',
                Sexo: animalData.Sexo || '',
                Tipo: animalData.Tipo || '',
                Estado: animalData.Estado || '',
                Edad: animalData.Edad || '',
                Crias: animalData.Crias || '',
                Numero_de_crias: animalData.Numero_de_crias || '',
                Observaciones: animalData.Observaciones || '',
                Vacunas: animalData.Vacunas || '',
                Peso: animalData.Peso || '',
                photoUrl: animalData.photoUrl || '',
                Nacimiento: animalData.Nacimiento || ''
            });
        };
        fetchAnimal();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnimal({ ...animal, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let photoUrl = animal.photoUrl;
        if (file) {
            photoUrl = await uploadFile(file);
        }
        const animalDoc = doc(db, 'animals', id);
        await updateDoc(animalDoc, { ...animal, photoUrl });
        navigate('/');
    };

    const selectOptions = {
        Sexo: ["Macho", "Hembra"],
        Crias: ["Sí", "No"],
        Tipo: ["Novilla", "Ternera"],
        Estado: ["Vacía", "Preñada"]
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <button onClick={handleBack} className='mb-3 ml-3'><i className="fa-solid fa-arrow-left-long text-Turquesa text-md"></i><span className='text-Turquesa text-md ml-1 font-bold'>REGRESAR</span></button>
            <div className="container mx-auto max-w-2xl mt-4 p-4 shadow-lg rounded-lg bg-white">
            <h2 className="text-2xl font-bold text-center mb-6 text-VerdeMusgo">Editar Animal</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                    <input type="file" name="photo" id="photo" onChange={handleFileChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:text-Turquesa hover:file:text-white hover:file:bg-Turquesa" />
                </div>
                {Object.entries(animal).map(([key, value]) => {
                    if (key in selectOptions) {
                        return (
                            <div className="form-group" key={key}>
                                <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                <select
                                    name={key}
                                    id={key}
                                    value={value}
                                    onChange={handleChange}
                                    className="block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Seleccionar</option>
                                    {selectOptions[key].map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        );
                    } else if (key !== 'photoUrl') {
                        return (
                            <div className="form-group" key={key}>
                                <input
                                    type={key === 'Nacimiento' ? 'date' : 'text'}
                                    name={key}
                                    id={key}
                                    value={value}
                                    onChange={handleChange}
                                    className="block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                />
                            </div>
                        );
                    }
                    return null;
                })}
                <button type="submit" className="w-full p-3 bg-Turquesa text-white rounded-md hover:bg-VerdeOscuro">Enviar</button>
            </form>
        </div>
        </div>
        
    );
};

export default EditAnimalForm;
