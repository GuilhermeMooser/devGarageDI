import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import { Helmet } from 'react-helmet';

import  '../Home/home.css';


import React, { useEffect, useState } from 'react';
import { obterCarrosPorMarca } from '../../services/carService';

import { toast } from "react-toastify";

import { db } from '../../services/firebaseConnection';
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
    query, 
    where
} from 'firebase/firestore';

export default function PORSCHE() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  /**
   * Componente Modal
   */
  const Modal = ({ isOpen, onClose, selectedItem }) => {
    const [ano, setAno] = useState("");
    const [descricao, setDescricao] = useState("");
    const [img, setImg] = useState("");
    const [modelo, setModelo] = useState("");
    const [marca, setMarca] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
      if (
        selectedItem &&
        selectedItem.ano &&
        selectedItem.descricao &&
        selectedItem.img &&
        selectedItem.modelo &&
        selectedItem.marca
      ) {
        setAno(selectedItem.ano);
        setDescricao(selectedItem.descricao);
        setImg(selectedItem.img);
        setModelo(selectedItem.modelo);
        setMarca(selectedItem.marca);
      }
    }, [selectedItem]);

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

    const fetchCars = async () => {
      const cars = await obterCarrosPorMarca("PORSCHE");
      setPorscheCars(cars);
    };

    /**
     * PUT */
    async function editarPost(car) {
      const docRef = doc(db, "carros", car);
      await updateDoc(docRef, {
        ano: ano,
        descricao: descricao,
        modelo: modelo,
        marca: marca,
        img: img
      })
        .then(() => {
          toast.success("Post atualizado com sucesso!");
          fetchCars();

          setAno("");
          setModelo("");
          setMarca("");
          setDescricao("");
          setImg("");
          setModalOpen(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    /**
     * DELETE */
    async function excluirCarro(id) {
      const userConfirmed = window.confirm("Tem certeza de que deseja excluir este carro?");
    
      if (!userConfirmed) {
          return;
      }

      try {
          const carsCollection = collection(db, "carros");
          const q = query(carsCollection, where('__name__', '==', id));
          const querySnapshot = await getDocs(q);
          
          if (querySnapshot.empty) {
            console.log("Nenhum documento encontrado para o ID fornecido.");
            return;
          }

          const deletePromises = [];
          querySnapshot.forEach((doc) => {
              deletePromises.push(deleteDoc(doc.ref));
          });
  
          await Promise.all(deletePromises);
  
          toast.success("Carro excluído!");
          fetchCars();
          setModalOpen(false);
      } catch (error) {
          console.log(error);
      }
  }

    if (!isOpen || !selectedItem) return null;
    return (
      <div className="modal-overlay-edit">
        <div className="modal-content">
          <span className="close-edit" onClick={onClose}>
            &times;
          </span>
          <h2>Edição</h2>

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
            <input
              value={marca}
              onChange={handleMarcaChange}
              disabled={isDisabled}
            ></input>

            <button className="adjustBtnAdd"
              onClick={() => editarPost(selectedItem.id)}>
              Salvar alterações
            </button>

            <button className="adjustBtnAdd colorDanger"
              onClick={() => excluirCarro(selectedItem.id)}>
              Excluir Carro
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

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
                        <img src={car.img} alt="PORSCHE"
                        onClick={() => handleItemClick(car)}></img>
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
    <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedItem={selectedItem}
      />
      <Footer />
    </>
  );
}