import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import BemVindo from "./components/BemVindo.jsx";
// import Saudacao from "./components/Saudacao.jsx";
// import Contador from "./components/Contador.jsx";
// import Contadorr from "./components/ContadorV2.jsx";
// import { FormularioDeMensagem } from "./components/FormularioDeMensagem.jsx";
import { MyLottie } from "./components/Lottie.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BemVindo />
    <Saudacao nome="Allyson" />
    <Saudacao nome="Jullia" />
    <Contador />
    <Contadorr />
    <FormularioDeMensagem /> */}
    <MyLottie />
  </StrictMode>
);
