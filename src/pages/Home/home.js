import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import { Helmet } from 'react-helmet';

import {Link} from 'react-router-dom';
import  './home.css';


import imgBmw from '../../assets/imgs/58042-car-coupe-m6-bmw-m3-m2-white.png'
import imgPorsche from '../../assets/imgs/porsche.png'

export default function Home() { 
    return (
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
            <section className="bmw" id="bmw">
                <div className="bmw-content">
                    <div className="bmw-details">
                        <h2>BMW: Inovação em Movimento</h2>
                        <p>Fundada em 1916, a BMW é uma das marcas mais respeitadas no mundo automotivo. Conhecida por seu compromisso com a engenharia de precisão e o desempenho, a BMW sempre esteve na vanguarda da tecnologia. Com uma linha de veículos que abrange desde sedãs luxuosos até SUVs esportivos, a BMW continua a definir o padrão de excelência e inovação no setor automotivo.</p>
                        <button className="bmw-btn"><Link to="/bmw">Saber mais</Link></button>
                    </div>
                    <div className="bmw-image">
                        <img src={imgBmw} alt="BMW"></img>
                    </div>
                </div>
            </section>
            <section className="porsche" id="porsche">
                <div className="porsche-content">
                    <div className="porsche-details">
                        <h2>Porsche: A Arte da Performance</h2>
                        <p>Desde sua criação em 1931, a Porsche tem sido sinônimo de desempenho e design icônicos. A marca alemã conquistou uma legião de fãs ao redor do mundo com seus carros esportivos elegantes e potentes. Conhecida pela sua herança nas pistas de corrida e pela constante inovação, a Porsche combina luxo e alta performance de uma maneira única, garantindo uma experiência de condução incomparável.</p>
                        <button className="porsche-btn"><Link to="/porsche">Saber mais</Link></button>
                    </div>
                    <div className="porsche-image">
                        <img src={imgPorsche} alt="Porsche"></img>
                    </div>
                </div>
            </section>
        <Footer />
    </>
    );
}
