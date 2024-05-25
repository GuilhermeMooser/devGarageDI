import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./home.css";

import imgBmw from "../../assets/imgs/58042-car-coupe-m6-bmw-m3-m2-white.png";
import imgPorsche from "../../assets/imgs/porsche.png";

import { db } from "../../services/firebaseConnection";

import { toast } from "react-toastify";

import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export default function Home() {
  const navigate = useNavigate();

  const goToBMW = () => {
    navigate("/bmw");
  };

  const [modalOpen, setModalOpen] = useState(false);

  /**
   * Componente Modal
   */
  const Modal = ({ isOpen, onClose }) => {
    const [ano, setAno] = useState("");
    const [descricao, setDescricao] = useState("");
    const [img, setImg] = useState("");
    const [modelo, setModelo] = useState("");
    const [marca, setMarca] = useState("BMW");

    const handleAnoChange = (e) => {
      setAno(e.target.value);
    };

    const handleDescricaoChange = (e) => {
      setDescricao(e.target.value);
    };

    const handleImgChange = (e) => {
      setImg(e.target.value);
    };

    const handleModeloChange = (e) => {
      setModelo(e.target.value);
    };

    const handleMarcaChange = (e) => {
      setMarca(e.target.value);
    };

    /**
     * CREATE */
    async function handleRegister() {

      await addDoc(collection(db, "carros"), {
        ano: ano,
        descricao: descricao,
        modelo: modelo,
        marca: marca,
        img: img,
      })
        .then(() => {
          toast.success("Carro adicionado com sucesso!");
          setAno("");
          setModelo("");
          setMarca("");
          setDescricao("");
          setImg("");
          setModalOpen(false);
        })
        .catch((error) => {
          toast.error("Houve um erro!");
          console.log("ERRO " + error);
        });
    }

    if (!isOpen) return null;
    return (
      <div className="modal-overlay-edit">
        <div className="modal-content">
          <span className="close-edit" onClick={onClose}>
            &times;
          </span>
          <h2>Adicione um carro</h2>

          <div className="form-container">
            <label>Modelo:</label>
            <input value={modelo} onChange={handleModeloChange}></input>

            <label>Ano:</label>
            <input value={ano} onChange={handleAnoChange}></input>

            <label>Imagem:</label>
            <input value={img} onChange={handleImgChange}></input>

            <label>Descrição:</label>
            <textarea
              rows="8"
              type="text"
              value={descricao}
              onChange={handleDescricaoChange}
              className="mb-5"
            ></textarea>

            <label>Marca:</label>
            <select value={marca} onChange={handleMarcaChange}>
              <option value="BMW">BMW</option>
              <option value="PORSCHE">Porsche</option>
            </select>

            <button className="adjustBtnAdd" onClick={() => handleRegister()}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleItemClickModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>DevGarage</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./home.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <div className="adjustBtnAdd">
        <button className="porsche-btn" onClick={() => handleItemClickModal()}>
          Adicione um Carro
        </button>
      </div>
      <section className="bmw" id="bmw">
        <div className="bmw-content">
          <div className="bmw-details">
            <h2>BMW: Inovação em Movimento</h2>
            <p>
              Fundada em 1916, a BMW é uma das marcas mais respeitadas no mundo
              automotivo. Conhecida por seu compromisso com a engenharia de
              precisão e o desempenho, a BMW sempre esteve na vanguarda da
              tecnologia. Com uma linha de veículos que abrange desde sedãs
              luxuosos até SUVs esportivos, a BMW continua a definir o padrão de
              excelência e inovação no setor automotivo.
            </p>
            <button className="bmw-btn" onClick={goToBMW}>
              Saber mais
            </button>
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
            <p>
              Desde sua criação em 1931, a Porsche tem sido sinônimo de
              desempenho e design icônicos. A marca alemã conquistou uma legião
              de fãs ao redor do mundo com seus carros esportivos elegantes e
              potentes. Conhecida pela sua herança nas pistas de corrida e pela
              constante inovação, a Porsche combina luxo e alta performance de
              uma maneira única, garantindo uma experiência de condução
              incomparável.
            </p>
            <button className="porsche-btn">
              <Link to="/porsche">Saber mais</Link>
            </button>
          </div>
          <div className="porsche-image">
            <img src={imgPorsche} alt="Porsche"></img>
          </div>
        </div>
      </section>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </>
  );
}
