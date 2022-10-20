
import NavBar from "../Componets/NavBar";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate()

    
    return (
      <div>
       
       <NavBar />
        <h1>Title:Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          tempore neque accusantium, consectetur fuga voluptate corporis eos
          autem, deserunt perspiciatis eligendi distinctio mollitia dolore!
          Dolorem, perferendis dignissimos! Veritatis, perspiciatis quos.
        </p>
        <button onClick={()=>{
	navigate("/")
}}></button>
      
      </div>
    );
  };
  
  
  export default HomePage