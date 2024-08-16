import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-VerdeMusgo text-white py-6 fixed bottom-0 w-full">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    ©{new Date().getFullYear()} Creado por <span className='font-semibold'>David Silvera</span> Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
