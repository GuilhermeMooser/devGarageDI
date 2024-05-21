import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import { Helmet } from 'react-helmet';

import  '../Home/home.css';


import React, { useEffect, useState } from 'react';
import { obterCarrosPorMarca } from '../../services/carService';

export default function PORSCHE() {

  const [porscheCars, setPorscheCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const cars = await obterCarrosPorMarca('PORSCHE');
      setPorscheCars(cars);
    };

    fetchCars();
  }, []);

  return(
    <>
      <Helmet>
          <title>DevGarage</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="./home.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
          
      </Helmet>
      <Header />

      <div>
        <h1 className="borderMarca">PORSCHE</h1>
      <ul>
        {porscheCars.map(car => (
          <section className="bmw" id="bmw">
            <li key={car.id}>
              <div className="bmw-content">
              <div className="bmw-image">
                        <img src={car.img} alt="PORSCHE"></img>
                  </div>
                  <div className="bmw-details">
                      <h2>{car.modelo}</h2>
                      <p>{car.descricao}</p>
                  </div>
              </div>
            </li>
          </section>
        ))}
      </ul>
    </div>

      
      <Footer />
    </>
  );
}