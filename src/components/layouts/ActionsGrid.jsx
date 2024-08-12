import React from 'react';
import { Link } from 'react-router-dom';

const ActionsGrid = () => {
    return (
        <div className="my-8">
            <div className="flex justify-center items-center gap-8">
                <a href='/AdminAnimals'>
                    <div className="flex items-center flex-col gap-3 w-52 h-38 p-4 text-wrap shadow-md">
                        <i className="fa-solid fa-gear text-4xl text-VerdeOscuro"></i>
                        <h3 className="text-md md:text-lg lg:text-xl xl:text-2xl text-VerdeOscuro font-bold" >Editar/Eliminar</h3>
                    </div>
                </a>
                <Link to='/AnimalForm'>
                    <div className="flex items-center flex-col gap-3 w-52 h-38 p-4 shadow-md">
                        <i className="fa-solid fa-plus text-4xl text-VerdeOscuro"></i>
                        <h3 className="text-md md:text-lg lg:text-xl xl:text-2xl text-VerdeOscuro font-bold">Añadir</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ActionsGrid;
