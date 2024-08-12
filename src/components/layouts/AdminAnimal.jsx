import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import ClipLoader from "react-spinners/ClipLoader";
import { db } from '../../controllers/firebase/firebaseConfig';
import AnimalEditCard from '../cards/EditAnimalCard';

const AdminAnimal = () => {
    // hooks
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Referenciar db
    const animalsCollection = collection(db, 'animals');

    // Show docs
    const ShowAnimal = async () => {
        try {
            const data = await getDocs(animalsCollection);
            setAnimals(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        } catch (error) {
            console.error('Error fetching animals:', error);
        }
        finally {
            setLoading(false);
        }
    };

    // Delete docs
    const deleteAnimals = async (id) => {
        const animalDoc = doc(db, 'animals', id);
        await deleteDoc(animalDoc);
        ShowAnimal();
    };

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        ShowAnimal();
    }, []);

    if (loading) {
        return (
            <ClipLoader
                color="#cbe552"
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                className='absolute inset-x-1/2 inset-y-1/2'
            />
        );
    }

    if (animals.length === 0) {
        return <div>No hay animales para mostrar</div>;
    }

    return (
        <div>
            <button onClick={handleBack} className='mb-3 ml-3'><i className="fa-solid fa-arrow-left-long text-Turquesa text-md"></i><span className='text-Turquesa text-md ml-1 font-bold'>REGRESAR</span></button>
            <div className='flex w-full flex-wrap justify-center'>
            {animals.map((animal) => (
                <AnimalEditCard
                    key={animal.id}
                    animal={animal}
                    onDelete={deleteAnimals}
                    editPath={`/EditAnimal/${animal.id}`}
                />
            ))}
        </div>
        </div>
        

    );
};

export default AdminAnimal;