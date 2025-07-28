import { useState } from "react";

function ContadorV2() {
  const [contadorV2, setContadorV2] = useState(0);

  const incrementar = () => {
    setContadorV2(contadorV2 + 1);
  };
  const decrementar = () => {
    setContadorV2(contadorV2 - 1);
  };

  return (
    <div>
      <p>Você clicou {contadorV2} vezes!</p>
      <button onClick={incrementar}> Adicionar 1</button>
      <button onClick={decrementar}> Remover 1</button>
    </div>
  );
}

export default ContadorV2;
