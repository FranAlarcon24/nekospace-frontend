import { Container, Row } from 'react-bootstrap';
import '../styles/card.css'


function Homeauth() {
return (
  <>
  <div className='fondo'>
   <Container className="welcome">
     <h1 className='titulo'>NekoSession</h1>
     <img className='image' src={gatoSpace} alt="nekoSpace" />
     <p className='sub'>¡¡un espacio creado para ti¡¡</p>
     <p className='sub'>donde encontraras todo lo que nececitas o no creias nececitar</p>
     <p className='sub'>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔ </p>
   </Container>

  </div>

    <div className='fon'>
      <Container className='pro3'>
        <div>
          <h2 className='subt'>Iniciar session</h2>
          <InicioForm/>
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


       </Container>
    
      </div>

  </>
 );
}


export default Homeauth;