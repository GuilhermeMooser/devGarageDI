/**

// Inicialize o Firestore
import { db } from '../../services/firebaseConnection';

// Função para obter carros por marca
function obterCarrosPorMarca(marca) {
  db.collection("carros")
    .where("marca", "==", marca)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        // Aqui você pode processar os dados como necessário
      });
    })
    .catch((error) => {
      console.log("Erro ao obter documentos: ", error);
    });
}

// Chame a função passando a marca desejada, por exemplo "BMW"
obterCarrosPorMarca("BMW");

function adicionarCarro(carro) {
    db.collection("carros").add(carro)
      .then((docRef) => {
        console.log("Documento escrito com ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Erro ao adicionar documento: ", error);
      });
  }
  
  // Exemplo de uso:
  adicionarCarro({
    marca: "BMW",
    modelo: "X5",
    ano: 2020,
    cor: "Azul"
  });

function atualizarCarro(carroId, novosDados) {
db.collection("carros").doc(carroId).update(novosDados)
    .then(() => {
    console.log("Documento atualizado com sucesso!");
    })
    .catch((error) => {
    console.error("Erro ao atualizar documento: ", error);
    });
}

// Exemplo de uso:
atualizarCarro("ID_DO_CARRO", {
cor: "Preto",
ano: 2021
});

function deletarCarro(carroId) {
    db.collection("carros").doc(carroId).delete()
      .then(() => {
        console.log("Documento deletado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao deletar documento: ", error);
      });
  }
  
  // Exemplo de uso:
  deletarCarro("ID_DO_CARRO"); */