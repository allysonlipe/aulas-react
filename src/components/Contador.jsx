import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Vocë clicou {contador} vezes</p>

      <button onClick={incrementar}>Clique Aqui</button>
    </div>
  );
}

export default Contador;
