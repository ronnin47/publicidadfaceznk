import React, { useEffect, useState } from 'react';
import 'animate.css';
import Card from 'react-bootstrap/Card';



interface CartaPjProps{
  imagen:string;
  titulo:string;
  leyenda:string;
}

const CardPj:React.FC<CartaPjProps>=({imagen,titulo,leyenda})=> {
  console.log(imagen)
  return (
    <Card style={{ width: '20rem', padding:"1px" , height:"29em"}} className='carta'>
      <Card.Img variant="top" src={imagen} style={{ width: 'auto', padding:"1px" , height:"18em", border:"2px solid black", borderRadius:"5PX"}}/>
      <Card.Body className='pergamino'>
        <Card.Title className='tituloCarta'>{titulo}</Card.Title>
        <Card.Text >
          <p style={{fontSize:"0.9em", fontFamily:"initial"}}>{leyenda}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}




interface CartaProps{
  dominio:string;
  naturaleza:string;
}

export const Carta: React.FC<CartaProps> = ({dominio,naturaleza}) => {
 
 console.log(`${dominio} ${naturaleza}`)


 const [imagen,setImagen]=useState<string>("../src/assets/base.jpg")
 const [titulo,setTitulo]=useState<string>("...")
 const [leyenda,setLeyenda]=useState<string>("...")
 const [txt,setTxt]=useState<string>("...")


useEffect(()=>{

  const compuesto = `${dominio}-${naturaleza}`;
  let newImagen = './assets/base.jpg';
    let newTitulo = '...';
    let newLeyenda = '...';
    let newTxt = '...';

  switch (compuesto) {
    case "guerrero-bueno":
      console.log("ENTRO EN GUERRERO-BUENO");
      newImagen = "./assets/gue-bue.jpg";
      newTitulo ="Bienhechor"
      newLeyenda="Solo levántate y con una gran sonrisa mira a los ojos de tu rival."
      newTxt="Este personaje es un valeroso guerrero de las artes marciales, entrenado en el antiguo arte del Jinken. Con un espíritu inquebrantable y una naturaleza optimista, se dedica a combatir la injusticia y proteger a los inocentes, arriesgando su vida sin dudarlo. Errante y libre, su motivación no es el poder propio ni los conflictos políticos, sino el perfeccionamiento constante de sus habilidades. Este héroe utiliza su fuerza vital para luchar en batallas aéreas, resistir ataques letales y desatar poderosas descargas de energía, siempre listo para enfrentarse a las peligrosas bestias del mundo salvaje y superar cualquier adversidad."
      break;

    case "guerrero-caotico":
      newImagen = "./assets/gue-cao.jpg";
      newTitulo="Tenaz"
      newLeyenda="¡Cállate, insecto! Ese ataque insignificante no se compara ni al más débil del viejo sensei."
      newTxt="Este personaje es un guerrero caótico con una voluntad indomable y agresiva, determinado a lograr sus deseos sin admitir miedo ni rendirse ante la adversidad. Para él, el mundo se mide por la fuerza y los hechos, no por las intenciones. Con una férrea voluntad, luchará violentamente por sus convicciones, sin temer matar ni morir, consciente de que la vida es una lucha de voluntades. Libre de las cadenas del bien y del mal, este personaje forja su propio camino, enfrentándose a cualquier adversario con temeridad y decisión, sea por una causa justa u oscura."
    break;

    case "guerrero-oscuro":
      newImagen = "./assets/gue-os.jpg";
      newTitulo="Destructor"
      newLeyenda="Con cada aliento, mi ki oscuro se fortalece, preparándose para consumir todo a su paso."
      newTxt="Este guerrero del Jinken, con una naturaleza oscura, es la personificación del mal en esta era. Su esencia maligna se alimenta del sufrimiento de los demás, buscando alterar el curso de las sagas con calamidades y destrucción. Utiliza su fuerza vital para desatar un poder devastador, enfrentándose a los héroes y desmoralizando los valores de la justicia. Su voluntad inquebrantable y siniestra lo impulsa a dominar y corromper todo a su alrededor, extinguiendo la esperanza de los inocentes y sembrando el caos en pueblos y reinos enteros. Su único propósito es utilizar su poder para llevar a cabo sus malévolos designios, enfrentándose a cualquier obstáculo con una ferocidad implacable."
    break;

    case "guerrero-neutral":
      newImagen = "./assets/gue-n.jpg";
      newTitulo="Luchador intrepido"
      newLeyenda="¿Guerra en Toran? ¿Crees que soy tan ingenuo como para morir por una batalla legendaria?"
      newTxt="Este guerrero Jinken neutral es un combatiente hábil y adaptable, guiado por sus propios intereses más que por el bien o el mal. Su maestría en el antiguo arte del Jinken le permite aprovechar su fuerza vital para enfrentar cualquier desafío que se le presente. Con una perspectiva objetiva, actúa de acuerdo a sus convicciones y deseos, sin inclinarse hacia un lado moral específico. Este guerrero rara vez arriesga su vida por otros, pero cuando sus propios intereses están en juego, lucha con una destreza y poder insuperables, utilizando su ki para superar cualquier obstáculo que se interponga en su camino."
    break;


   //hechiero
   case "hechicero-neutral":
      newImagen = "./assets/hechi-n.jpg";
      newTitulo="Alquimista mercante"
      newLeyenda="Estos atuendos mejorarán tu concentración y también llamarán la atención de las chicas en tu academia."
      newTxt="El hechicero neutral sigue un camino propio, alejado de las estrictas nociones del bien y el mal. Su objetivo principal es el conocimiento y la perfección de su arte, utilizando el Jujutsu para explorar los misterios del universo sin estar atado a una causa específica. Este hechicero puede actuar en función de sus intereses personales o en respuesta a las circunstancias, aliándose con fuerzas variadas según lo dicte la situación. Su enfoque pragmático y adaptable le permite navegar por las complejidades del mundo mágico, siempre en busca de sabiduría y poder."
    break;

    case "hechicero-caotico":
      newImagen = "./assets/hechi-cao.jpg";
      newTitulo="Guerrero Hojin"
      newLeyenda="Nunca temas a la raza demonio, temer a su presencia es quebrar el camino Hojin."
      newTxt="El hechicero caótico es un individuo impredecible, que emplea su dominio del Jujutsu para seguir sus caprichos y deseos personales. Desafía las convenciones y normas establecidas, buscando su propio camino en el vasto universo mágico. Utiliza su conocimiento de los hechizos de manera imprevisible, creando tanto caos como equilibrio según su voluntad. Este hechicero no teme a las consecuencias de sus acciones y se deleita en la libertad de usar su magia sin restricciones, enfrentando peligros y desafíos con un enfoque audaz y temerario."
    break;
   
    case "hechicero-bueno":
      newImagen = "./assets/hechi-bue.jpg";
      newTitulo="Caballero imperial"
      newLeyenda="No despertó su Hakai. Eso significa que su alma no está perdida. Me alegra por él."
      newTxt="El hechicero bueno es un guardián de la armonía y la justicia, utilizando el Jujutsu para proteger a los inocentes y preservar el equilibrio del universo. Proveniente de academias renombradas o antiguos templos, dedica su vida a estudiar y dominar los hechizos de los nobles ryus. Con su sabiduría y poder, invoca conjuros para sanar, proteger y combatir las fuerzas oscuras que amenazan la paz. Este hechicero actúa con un profundo sentido de responsabilidad, siempre dispuesto a sacrificarse por el bienestar de los demás y la preservación del orden natural."
    break;

    case "hechicero-oscuro":
      newImagen = "./assets/hechi-os.jpg";
      newTitulo="Brujo Bijou"
      newLeyenda="Ahora descubriran porque todo verdadero demonio respeta el poderoso Hakai de mi dios."
      newTxt="El hechicero oscuro es una figura temible que manipula el siniestro ryu de oscuridad para sembrar caos y destrucción. Proveniente de antiguos linajes de brujos o cultos demoníacos, utiliza el Jujutsu para corromper y dominar. Con una sed insaciable de poder, invoca hechizos malignos para desatar calamidades y ejercer su control sobre el mundo. Este hechicero se deleita en el sufrimiento y la desesperación, trabajando incansablemente para desmantelar la armonía del universo celeste y establecer su dominio de terror y maldad."
    break;

    //maestro de armas
    case "mArmas-neutral":
      newImagen = "./assets/mArmas-n.jpg";
      newTitulo="Explorador cauto"
      newLeyenda="Notoriamente, el Kaiju que seguimos es gigantesco. Mantendré mi distancia. ¡Buena suerte, muchachos!"
      newTxt="Este maestro de armas neutral es un guerrero que maneja su arma con una habilidad y precisión insuperables, siempre guiado por sus propios intereses. No se alinea con el bien ni con el mal, sino que actúa según lo que considera más beneficioso para sí mismo en cada situación. Con una visión objetiva del mundo, evalúa cada circunstancia y decide su curso de acción basado en sus propias convicciones y deseos. Su leal arma es una extensión de su ser, y juntos enfrentan cualquier desafío con una estrategia calculada y una maestría indiscutible. En la batalla, este maestro de armas neutral se adapta y aprovecha cada oportunidad, priorizando su supervivencia y sus objetivos personales."
    break;

    case "mArmas-caotico":
      newImagen = "./assets/mArmas-cao2.jpg";
      newTitulo="Berserker"
      newLeyenda="No me interesa tu historia. Solo cállate y muere."
      newTxt="Este maestro de armas caótico es un guerrero temerario cuya habilidad con su arma única es tan impredecible como su voluntad. No sigue reglas ni códigos de honor, sino que lucha por sus propios deseos y caprichos. Con su estilo de combate salvaje y despiadado, deja un rastro de caos y destrucción a su paso, desafiando el orden establecido y sembrando el miedo entre sus enemigos con cada movimiento audaz."
    break;
   
    case "mArmas-bueno":
      newImagen = "./assets/mArmas-bue.jpg";
      newTitulo="Soldado del reino"
      newLeyenda="Eres el estandarte viviente de los héroes de tu nación."
      newTxt="Este maestro de armas, imbuido de honor y nobleza, es un guerrero excepcional cuya destreza con su arma única es incomparable. Su maestría en el combate se combina con un corazón noble y una determinación inquebrantable para proteger a los inocentes y luchar por la justicia. Con su hoja reluciente o su kunai furtivo, es un símbolo de valentía y honor en los campos de batalla, defendiendo los ideales de la luz con cada golpe certero."
    break;

    case "mArmas-oscuro":
      newImagen = "./assets/mArmas-os.jpg";
      newTitulo="Danzante del abismo"
      newLeyenda="Mi arma es la sombra que devora la luz, mi destreza es la oscuridad que consume toda esperanza."
      newTxt="Este maestro de armas oscuro es la personificación misma de la fatalidad y el terror. Su habilidad con su arma única es incomparable, pero su corazón está oscurecido por la maldad y la sed de poder. Utiliza su maestría en el combate para sembrar el caos y la desesperación, llevando a cabo sus siniestros designios con una precisión letal. Con su arma única imbuida de oscuridad, es el azote de los inocentes y el terror de los reinos, un guerrero cuya sola presencia es una advertencia de la tragedia que se avecina."
    break;

    //maestro de Sombras
    case "mSombras-neutral":
      newImagen = "./assets/mSombras-n.jpg";
      newTitulo="Ladron de Zendo"
      newLeyenda="Te metiste con el tipo equivocado, idiota. Sera mejor que te despidas de esa bonita mochila."
      newTxt="Este maestro de las sombras neutral es un experto en el arte del Kageboshi, que actúa según sus propios intereses sin alinearse con el bien ni el mal. Proveniente de antiguos clanes ninja, se mueve con extrema cautela y astucia, utilizando técnicas ilusorias para engañar, crear clones y ocultar su identidad. Siempre analítico y calculador, prioriza su bienestar y objetivos personales, adaptándose a cada situación con una perspectiva objetiva y pragmática."
    break;

    case "mSombras-caotico":
      newImagen = "./assets/mSombras-cao.jpg";
      newTitulo="Asesino de la Yakuza"
      newLeyenda="El jefe estará muy contento de ver tu respeto. Ahora dame tu mano, aún tengo varios que visitar hoy."
      newTxt="Este maestro de las sombras caótico, alineado con la yakuza, es un sicario implacable que utiliza su dominio del arte del Kageboshi para sembrar el caos y cumplir sus propios deseos. Con una astucia sin igual, se mueve en las sombras, empleando técnicas ilusorias para engañar, acechar y eliminar a sus objetivos. No sigue ningún código de ética, actuando con agresividad y sin remordimientos, siempre calculando las probabilidades para maximizar su eficacia en cada misión. Su lealtad es hacia sí mismo y sus intereses, y utiliza su habilidad para manipular y desestabilizar cualquier situación a su favor, dejando un rastro de temor y confusión a su paso."
    break;
   
    case "mSombras-bueno":
      newImagen = "./assets/mSombras-bue.jpg";
      newTitulo="Guardian de Himitsu"
      newLeyenda="Mi shinobido siempre buscara hallar el mejor camino para sofocar el mal."
      newTxt="Este maestro de las sombras bueno es un protector silencioso que utiliza sus habilidades excepcionales en el arte del Kageboshi para mantener el orden y la justicia desde las sombras. Proveniente de los antiguos clanes ninja, su astucia y destreza le permiten moverse con extrema cautela, siempre analizando y anticipándose a los acontecimientos. Con un profundo respeto por el manto de las sombras, este guerrero trabaja incansablemente para proteger a los inocentes y mantener la paz en sus tierras. En su camino, se convierte en un héroe enigmático, guiado por principios nobles y un compromiso inquebrantable con la justicia."
    break;

    case "mSombras-oscuro":
      newImagen = "./assets/mSombras-os.jpg";
      newTitulo="Corruptor del abismo"
      newLeyenda="Ahora expandan el temor, comuniquen que el Amo Yoroi Kisamono resurgira de las profundidades."
      newTxt="Este maestro de las sombras oscuro es la encarnación del mal, utilizando su dominio del arte del Kageboshi para sembrar terror y destrucción. Proveniente de un clan ninja corrupto, emplea técnicas ilusorias para manipular y engañar, acechando a sus víctimas con una presencia inquietante. Su único objetivo es el sufrimiento y la dominación, actuando desde las sombras para desmoralizar a sus enemigos y extinguir toda esperanza. Este guerrero siniestro se deleita en el caos y utiliza su astucia y habilidades para generar calamidades, enfrentándose a aquellos que representan el bien con una crueldad implacable."
    break;



    //maestro epsiritual
    case "mEspiritual-bueno":
      newImagen="./assets/mEspiritual-bue.jpg"
      newTitulo="Nexo del bosque"
      newLeyenda="Los leñadores me han jurado que no talarán en sus dominios. No los castigues, gran antiguo."
      newTxt="Este maestro espiritual bueno es un guardián sabio y compasivo, dedicado a preservar el balance fundamental del universo. Con su familiar Shikigami a su lado, combate incansablemente contra las presencias oscuras y los temibles Ayakashis. Proveniente de antiguos templos y sectas religiosas, utiliza el arte del Reiso para percibir e interactuar con el mundo invisible, purificando la corrupción y guiando a las almas perdidas hacia el descanso en paz. Su misión es mantener la armonía y el equilibrio, enfrentando el mal con una fuerza espiritual inquebrantable y desinteresada."
    break;


   
    case "mEspiritual-neutral":
      newImagen="./assets/mEspiritual-n.jpg"
      newTitulo="Cazador Ayakashi"
      newLeyenda="Mimiku, rastrea el aroma de esta prenda. El fantasma que buscamos perteneció a esta villa."
      newTxt="Este maestro espiritual neutral es un enigma, guiado por su propio entendimiento del equilibrio universal. Aunque no se alinea estrictamente con el bien ni el mal, actúa para preservar el balance cuando ve necesario. Utiliza el arte del Reiso para percibir el mundo invisible y luchar contra las presencias oscuras, pero sus intervenciones son selectivas y motivadas por sus propios principios. Junto a su Shikigami, este maestro espiritual maneja el delicado balance de las fuerzas primordiales con una perspectiva pragmática y objetiva."
    break;

    
    case "mEspiritual-caotico":
      newImagen="./assets/mEspiritual-cao.jpg"
      newTitulo="Pilar del fuego"
      newLeyenda="La batalla es inevitable. Marcharemos en nombre de los Kamis del fuego. Extinguiremos su Hakai."
      newTxt="Este maestro espiritual caótico es un agente impredecible, cuyo único objetivo es su convicción y deseo personal, a menudo desafiando las normas establecidas. Con el arte del Reiso, manipula el mundo invisible y su Shikigami para enfrentar las fuerzas oscuras de manera agresiva y no convencional. Aunque su lucha puede a veces alinearse con el bien, su naturaleza impulsiva y su enfoque caótico a menudo siembran tanto caos como armonía. Su conexión con el mundo espiritual es intensa y sin restricciones, reflejando su espíritu indomable y su voluntad de imponer su propio orden"
    break;
  
    
    case "mEspiritual-oscuro":
      newImagen="./assets/mEspiritual-os.jpg"
      newTitulo="Principe Ayakashi"
      newLeyenda="Aguardare que mi padre de la orden.Pero mientras tanto solo quiero divertirme y conocerlos."
      newTxt="Este maestro espiritual oscuro es una figura siniestra que usa su dominio del Reiso para sembrar temor y desarmonía. Aliado con un Shikigami corrupto, manipula las fuerzas invisibles para desatar el caos y la destrucción. En lugar de guiar almas hacia el descanso, las atrapa y las utiliza para fortalecer su poder. Su misión es subvertir el orden y la armonía, extendiendo la corrupción y el mal por el universo. Este maestro espiritual oscuro es un antagonista formidable, que combina sabiduría ancestral con una malevolencia profunda y peligrosa."
    break;

    //criador bakemono
    
    case "cBakemono-bueno":
      newImagen="./assets/cBakemono-bue.jpg"
      newTitulo="Aventurero salvaje"
      newLeyenda="Con suerte podamos encontrar rivales en este pueblo.¿Que te parece una buena pelea Taro?"
      newTxt="El criador bakemono bueno es un defensor empático de las bestias mágicas y la naturaleza. Dedica su vida a proteger la armonía de las zonas naturales y ayudar a las criaturas en peligro. Con un profundo conocimiento del Zoshoku, se comunica con las bestias y cura sus heridas, estableciendo vínculos de lealtad y confianza. Junto a sus leales aliados bakemono, combate a los temibles Kaiju y otros peligros, siempre buscando preservar el equilibrio y la paz en el universo celeste. Su propósito es noble, y sus acciones están guiadas por un profundo respeto y amor por todas las criaturas vivientes."
    break;

    
    case "cBakemono-neutral":
      newImagen="./assets/cBakemono-n.jpg"
      newTitulo="Herborista"
      newLeyenda="El estiércol de trazgo es el secreto. Vamos, frótalo en tu rostro y verás."
      newTxt="El criador bakemono neutral es un aventurero pragmático que busca su propio camino en el vasto universo celeste. Sin alinearse estrictamente con el bien o el mal, utiliza su conocimiento del Zoshoku para establecer vínculos con las bestias mágicas y protegerse en sus viajes. Su lealtad está con sus bakemono y su propia supervivencia, y tomará partido en conflictos solo si sus intereses están en juego. Explorando tierras inhóspitas y enfrentando Kaijus, este criador busca evolucionar junto a sus bestias, priorizando su bienestar y el de sus aliados sobre cualquier causa externa."
    break;
   
    
    case "cBakemono-caotico":
      newImagen="./assets/cBakemono-cao.jpg"
      newTitulo="Cazador de tierras inhospitas"
      newLeyenda="¡Vamos, Raptor! Esos Wuargos no deben estar muy lejos de aquí."
      newTxt="El criador bakemono caótico es un temerario que desafía las normas establecidas, utilizando su dominio del Zoshoku para imponer su voluntad en el mundo salvaje. Sus vínculos con las bestias son fuertes y agresivos, y juntos enfrentan los peligros con una energía indomable. Este criador no teme a la destrucción y utiliza sus aliados bakemono para superar cualquier obstáculo que se interponga en su camino, ya sea un Kaiju o una fuerza adversa. Su naturaleza impredecible y su búsqueda de poder personal lo llevan a tomar decisiones impulsivas y a sembrar tanto caos como equilibrio."
    break;
    
    
    case "cBakemono-oscuro":
      newImagen="./assets/cBakemono-os.jpg"
      newTitulo="Dominador Kaiju"
      newLeyenda="Nadie que no sienta el instinto oscuro que habita en su ser, podrá dominar la voluntad de un Kaiju."
      newTxt="El criador bakemono oscuro es una figura siniestra que manipula a las bestias mágicas para sus propios fines malévolos. Utilizando el arte del Zoshoku, corrompe y controla a sus bakemono, convirtiéndolos en armas de destrucción y terror. Junto a sus bestias, este criador oscuro invade reinos y provoca calamidades, buscando extender su influencia y poder a través del miedo y la dominación. Enfrentando a los Kaiju con una crueldad implacable, utiliza las fuerzas del mundo salvaje para alimentar su sed de poder y destrucción, dejando un rastro de caos y sufrimiento en su estela."
    break;

    default:
      console.log("se fue al default");
      newImagen = "./assets/base.jpg";
      break;
  }

  setImagen(newImagen);
  setTitulo(newTitulo);
  setLeyenda(newLeyenda);
  setTxt(newTxt);
  
  setAnimacionActiva(true);
  setTimeout(() => {
        setAnimacionActiva(false); 
      }, 1000); 



},[dominio,naturaleza])


const [animacionActiva, setAnimacionActiva] = useState<boolean>(false);
 





return (
  <div>
    <div className="orden">
      <div
        className={`animate__animated ${animacionActiva ? 'animate__fadeInLeftBig' : ''}`}
      >
        <CardPj imagen={imagen} titulo={titulo} leyenda={leyenda} />
      </div>

      <div
        className={`animate__animated ${animacionActiva ? 'animate__fadeInRightBig' : ''}`}
      >
        <div className="container textoCard" style={{fontFamily:"cursive"}}>{txt}</div>
      </div>
    </div>
  </div>
);
}


