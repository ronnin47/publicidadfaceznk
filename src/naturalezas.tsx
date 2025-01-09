
import "animate.css"




interface NaturalezasProps {
    checkNatura: string | null; // Permitir que sea null
    setCheckNatura: React.Dispatch<React.SetStateAction<string | null>>;
  }

export const Naturalezas:React.FC<NaturalezasProps>=({checkNatura,setCheckNatura})=> {
    
     

    const selecionado = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value; // Obtiene el valor del botón clickeado
        setCheckNatura(value); // Actualiza el estado en el padre
      };
 
   
    return (
        <>
        <button className={`btnNatura bueno ${checkNatura === 'bueno' ? 'selected animate__animated animate__flip' : ''}`} value="bueno" onClick={selecionado}>Bueno</button>
        <button className={`btnNatura neutral ${checkNatura === 'neutral' ? 'selected animate__animated animate__flip' : ''}`} value="neutral" onClick={selecionado}>Neutral</button>
        <button className={`btnNatura caotico ${checkNatura === 'caotico' ? 'selected animate__animated animate__flip' : ''}`} value="caotico" onClick={selecionado}>Caotico</button>
        <button className={`btnNatura oscuro ${checkNatura === 'oscuro' ? 'selected animate__animated animate__flip' : ''}`} value="oscuro" onClick={selecionado}>Oscuro</button>
        </>
  )
}

