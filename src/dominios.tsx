
import "animate.css"


interface DominiosProps {
    checkDominio: string | null; // O el tipo que corresponda
    setCheckDominio: React.Dispatch<React.SetStateAction<string | null>>;
  }


export const Dominios: React.FC<DominiosProps>=({checkDominio,setCheckDominio})=> {
     

    const selecionado = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value; // Obtiene el valor del botón clickeado
        setCheckDominio(value); // Actualiza el estado en el padre
      };
 
 
    return (
        <>
        <button className={`btnNatura guerrero ${checkDominio === 'guerrero' ? 'selected animate__animated animate__flip' : ''}`} value="guerrero" onClick={selecionado}>Guerrero</button>
        <button className={`btnNatura mArmas ${checkDominio === 'mArmas' ? 'selected animate__animated animate__flip' : ''}`} value="mArmas" onClick={selecionado}>Maestro de armas</button>
        <button className={`btnNatura mSombras ${checkDominio === 'mSombras' ? 'selected animate__animated animate__flip' : ''}`} value="mSombras" onClick={selecionado}>Maestro de sombras</button>
        <button className={`btnNatura mEspiritual ${checkDominio === 'mEspiritual' ? 'selected animate__animated animate__flip' : ''}`} value="mEspiritual" onClick={selecionado}>Maestro espiritual</button>
        <button className={`btnNatura hechicero ${checkDominio === 'hechicero' ? 'selected animate__animated animate__flip' : ''}`} value="hechicero" onClick={selecionado}>Hechicero</button>
        <button className={`btnNatura cBakemono ${checkDominio === 'cBakemono' ? 'selected animate__animated animate__flip' : ''}`} value="cBakemono" onClick={selecionado}>Criador Bakemono</button>
        </>
  )
}

