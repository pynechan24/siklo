import React from 'react';
import Image from 'next/image';
import knoxlogo from '/public/knox.jpg';
import dmdlogo from '/public/dmd_logo.svg';
import nacalogo from '/public/naca.png';
import helstons from '/public/helstons.png';
import pando from '/public/pando.svg';
import elsolitario from '/public/elsolitario.png'

const BrandsSection = ({ product }) => {
    return (
            
        <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-black">
            <h2 className="text-3xl font-bold text-center mb-8">Our Brands</h2>
            <div className="flex flex-wrap justify-center items-center">
                {/* Repeat this block for each brand */}
                <div className="m-4">
                    <Image
                        src={dmdlogo} // Replace with actual brand logo path
                        alt="DMD"
                        width={150}
                        height={150}
                    />
                <p className="mt-2 text-center">DMD Helmet</p>
                </div>
                {/* Add more brands similarly */}

                <div className="m-4">
                <Image
                    src={nacalogo} // Replace with actual brand logo path
                    alt="NACA"
                    width={150}
                    height={150}
                />
                <p className="mt-2 text-center">NACA Helmet</p>
                </div>

                <div className="m-4">
                <Image
                    src={helstons} // Replace with actual brand logo path
                    alt="Helstons"
                    width={150}
                    height={150}
                />
                <p className="mt-2 text-center">Helstons</p>
                </div>
            
                <div className="m-4">
                <Image
                    src={knoxlogo} // Replace with actual brand logo path
                    alt="Knox"
                    width={150}
                    height={150}
                />
                <p className="mt-2 text-center">Knox</p>
                </div>

                <div className="m-4">
                <Image
                    src={pando} // Replace with actual brand logo path
                    alt="Pando"
                    width={150}
                    height={150}
                />
                <p className="mt-2 text-center">Pando Moto</p>
                </div>

                <div className="m-4">
                <Image
                    src={elsolitario} // Replace with actual brand logo path
                    alt="elsolitario"
                    width={150}
                    height={150}
                />
                <p className="mt-2 text-center">El Solitario</p>
                </div>
            </div>
        </div>
        </section>

    );

};

export default BrandsSection;

