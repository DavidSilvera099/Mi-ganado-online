import React from 'react';
import { Link } from 'react-router-dom';

const AnimalPreviewCard = ({ animal }) => {
    return (
        <Link className='flex w-4/5 h-40 md:w-4/5 border border-gray-200 rounded-lg shadow-lg overflow-hidden m-4' to={`/animals/${animal.id}`}>
            <div className='w-5/6'>
                <img src={animal.photoUrl || 'https://via.placeholder.com/150'} alt={animal.name} className="object-cover h-full w-full" />
            </div>
            <div className="w-60 p-4 flex flex-col m-auto">
                <h5 className="text-xl leading-none font-bold text-VerdeMusgo mb-1">{animal.Nombre}</h5>
                <p className="text-lg text-VerdeOscuro font-semibold">{animal.Tipo}</p>
                <p className="text-lg text-VerdeOscuro"><strong></strong>{animal.Edad || 'N/A'}</p>
            </div>
        </Link>
    );
};


export default AnimalPreviewCard;
