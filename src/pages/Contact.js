import {Navigate, useNavigate} from 'react-router-dom'
import HomePage from './Home';
import NavBar from '../Componets/NavBar';

const ContactPage = () => {
    const navigate = useNavigate()

    
   
    return (
      <div>
     
        <h1>Title:Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          tempore neque accusantium, consectetur fuga voluptate corporis eos
          autem, deserunt perspiciatis eligendi distinctio mollitia dolore!
          Dolorem, perferendis dignissimos! Veritatis, perspiciatis quos.
        </p>
        <button onClick={()=>{
                navigate('/')
}}></button>
     
      </div>
    );
  };
  
  
  export default ContactPage;