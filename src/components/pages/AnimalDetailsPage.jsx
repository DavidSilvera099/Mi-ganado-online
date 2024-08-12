import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../controllers/firebase/firebaseConfig';
import AnimalCard from '../cards/AnimalCard.jsx';
import ClipLoader from "react-spinners/ClipLoader";

const AnimalDetailsPage = () => {
    const { animalId } = useParams();
    const navigate = useNavigate();
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        const fetchAnimal = async () => {
            const docRef = doc(db, 'animals', animalId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setAnimal(docSnap.data());
            } else {
                console.log("No such document!");
            }
        };

        fetchAnimal();
    }, [animalId]);

    const handleBack = () => {
        navigate(-1);
    };

    if (!animal) {
        return (
            <ClipLoader
                color="#cbe552"
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                className='absolute inset-x-1/2 inset-y-1/2'
            />
        );
    }

    return (
        <div>
            <button onClick={handleBack} className='mb-3 ml-3'><i className="fa-solid fa-arrow-left-long text-Turquesa text-md"></i><span className='text-Turquesa text-md ml-1 font-bold'>REGRESAR</span></button>
            <AnimalCard animal={animal} />
        </div>
    );
};

export default AnimalDetailsPage;
