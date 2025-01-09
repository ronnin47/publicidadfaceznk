
import 'animate.css';
import { Carta } from './carta';
import { Naturalezas } from './naturalezas';
import { Dominios } from './dominios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const App = () => {
  const [checkDominio, setCheckDominio] = useState<string | null>(null);
  const [checkNatura, setCheckNatura] = useState<string | null>(null);

  const msg = "Bienvenido a ZNK!! Combina una naturaleza y un dominio antiguo y descubrirás qué tipo de personaje puede existir en Recuerdos del Zepiro.";
  const [mensajeApertura] = useState(msg);


  return (
    <div className="container app-container" style={{alignItems:"center",padding:"2em"}}>
      <div className="card-container">
        {checkNatura && checkDominio ? (
          <Carta dominio={checkDominio} naturaleza={checkNatura} />
        ) : (
          <p className="mensajeAp animate__animated animate__fadeInTopLeft">
            {mensajeApertura}
          </p>
        )}
      </div>

      {/* Contenedor de Naturaleza */}
      <div className="naturaleza animate__animated animate__fadeInTopLeft" style={{marginTop:"1em"}}>
        <div className="naturalezas-container">
          <Naturalezas checkNatura={checkNatura} setCheckNatura={setCheckNatura} />
        </div>
        <p className="texto">Naturaleza</p>
      </div>

      {/* Contenedor de Dominio */}
      <div className="dominio animate__animated animate__fadeInTopRight">
        <div className="dominios-container">
          <Dominios checkDominio={checkDominio} setCheckDominio={setCheckDominio} />
        </div>
        <p className="texto">Dominio antiguo</p>
      </div>
    </div>
  );
};