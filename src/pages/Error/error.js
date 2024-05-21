import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import { Helmet } from 'react-helmet';

import {Link} from 'react-router-dom';
import  './error.css';

export default function Error() {
    return(
        <>
            <Helmet>
                <title>Erro</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="./error.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
                <div className="erro">
                <div className="erro-details">
                    <h1>Essa página não existe, ou está incorreta!</h1>
                    <h3>Volte para a nossa Home!</h3>
                    <button className="error-btn"><Link to="/home">Voltar</Link></button>
                </div>
                </div>
            <Footer />
        </>
    );
}