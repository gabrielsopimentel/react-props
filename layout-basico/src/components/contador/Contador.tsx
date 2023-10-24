import { useState } from "react";

function Contador() {
  //variavel de estado => Componente
  const [valor, setValor] = useState(0);

  function addMaisUm() {
    setValor(valor + 1);
  }

  return (
    <>
      <button onClick={addMaisUm}>Adicione mais </button>
      <h1>{valor}</h1>
    </>
  );
}

export default Contador;
