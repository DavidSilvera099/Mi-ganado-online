import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../controllers/firebase/firebaseConfig';
import AnimalPreviewCard from '../cards/AnimalPreviewCard';
import ClipLoader from "react-spinners/ClipLoader";

const ShowAnimals = () => {
    // hooks
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    // Referenciar db
    const animalsCollection = collection(db, 'animals');

    // Show docs
    const fetchAnimals = async () => {
        try {
            const data = await getDocs(animalsCollection);
            setAnimals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error('Error fetching animals:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimals();
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

    return (
        <div>
            {animals.length === 0 ? (
                <div className="alert alert-info" role="alert">
                    No animals found.
                </div>
            ) : (
                <div className="grid grid-cols-1 justify-items-center md:grid-cols-3">
                    {animals.map((animal) => (
                        <AnimalPreviewCard key={animal.id} animal={animal} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShowAnimals;
