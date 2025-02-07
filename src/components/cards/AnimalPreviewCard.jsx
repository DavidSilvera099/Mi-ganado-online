import { Link } from 'react-router-dom';
import logoVaca from '../../../public/logovac.png';

const AnimalPreviewCard = ({ animal }) => {
    return (
        <Link className='flex w-11/12 h-40 md:w-4/5 border border-gray-200 rounded-lg shadow-lg overflow-hidden m-4' to={`/animals/${animal.id}`}>
            <div className='w-5/6'>
                <img src={animal.photoUrl || logoVaca} alt={animal.Nombre} loading="lazy" className="object-cover h-full w-full" />
            </div>
            <div className="w-60 p-4 flex flex-col m-auto">

                <h5 className="text-xl leading-none font-bold text-VerdeMusgo mb-1">{animal.Nombre || 'Sin nombre'}</h5>
                <p className="text-lg text-VerdeOscuro font-semibold">{animal.Tipo || 'N/A'}</p>
                <p className="text-lg text-VerdeOscuro"><strong></strong>{animal.Edad || 'N/A'}</p>

            </div>
        </Link>
    );
};


export default AnimalPreviewCard;
