import { Container, Row } from 'react-bootstrap';
import '../styles/card.css'
import '../styles/homeAdmin.css'


function HomeAdmin() {
 return (
  <>
  <div className='fondo'>
   <Container className="welcome">
     <h1 className='titulo'>NekoSpace</h1>
     <p className='sub'>(˶o⩊o˶)</p>
     <p className='sub'>¡¡un espacio creado para ti¡¡</p>
     <p className='sub'>Acabas de ingresar como un admin yeiii</p>
     <p className='sub'>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔ </p>
   </Container>

  </div>

  <div className='fondo'>
     <Container className="welcome">
       <h1 className='titulo'>NekoSpace</h1>
       <img className='image' src={gatoSpace} alt="nekoSpace" />
       <p className='sub'>¡¡un espacio creado para ti¡¡</p>
       <p className='sub'>donde encontraras todo lo que nececitas o no creias nececitar</p>
       <p className='sub'>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔ </p>
     </Container>
  
    </div>
  </>

 );

}


export default HomeAdmin;