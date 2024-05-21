import { db } from './firebaseConnection';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const obterCarrosPorMarca = async (marca) => {
    const carrosRef = collection(db, 'carros');
    const q = query(carrosRef, where('marca', '==', marca));
    const querySnapshot = await getDocs(q);
    const carros = [];
    querySnapshot.forEach(doc => {
      carros.push({ id: doc.id, ...doc.data() });
    });
    return carros;
  };