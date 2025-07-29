import { useState } from "react";

export function FormularioDeMensagem() {
  const [mensagem, setMensagem] = useState("");
  const [paragrafo, setParagrafo] = useState("");

  function handleChange(e) {
    setMensagem(e.target.value);
  }

  function handleSubmit() {
    setParagrafo(mensagem);
    setMensagem("");
  }

  return (
    <>
      <input onChange={handleChange} value={mensagem} />
      <button onClick={handleSubmit}>Enviar</button>
      <p>Mensagem Enviada: {paragrafo}</p>
    </>
  );
}
