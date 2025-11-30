import { Container, Row } from 'react-bootstrap';
import  ProyectCard from '../components/organism/ProyectCard.jsx';
import Producto from '../data/Producto.js';
import '../styles/card.css'
import '../styles/Contacto.css'
import gatoSpace from '../assets/images/gatoSpace.webp'
import ContactoForm from '../components/organism/ContactoForm.jsx';
import mapa from '../assets/images/mapa.webp'

function Contacto() {
 return (
  <>
  <div className='fondo'>
   <Container className="welcome">
     <h1 className='titulo'>NekoContactos</h1>
     <img className='image' src={gatoSpace} alt="nekoSpace" />
     <p className='sub'>¡¡un espacio creado para ti¡¡</p>
     <p className='sub'>donde encontraras todo lo que nececitas o no creias nececitar</p>
     <p className='sub'>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔ </p>
   </Container>

  </div>

    <div className='fon'>
      <Container className='pro2'>
        <div>
          <h2 className='subt'>Contactanos</h2>
          <ContactoForm/>
        </div> 
      </Container>
    </div>

    <div className='fondo'>
               <Container className="welcome">
                 <h2 className='titulo'>NekoSpace</h2>
                <Container className='redes'> 
                 <img className='imagen' src={gatoSpace} alt="instagram"/><p className='sub2'>@Neko_Space</p>
                 <img className='imagen' src={gatoSpace} alt="x"/><p className='sub2'>@Nek0_Space_</p>
                 <img className='imagen' src={gatoSpace} alt="tiktok"/><p className='sub2'>@Neko_SpaceOwO</p>
                </Container>
        
                 <img className='imagenM3' src={mapa} alt="mapa"/>
        
               </Container>
            
    </div>

  </>
 );

}


export default Contacto;