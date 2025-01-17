import './Header.css'
import { CiShoppingCart } from "react-icons/ci";
import { useState, useEffect } from 'react';

const Header = ({value}) => {

  const [calendar,setCalendar]=useState()
  const [total, setTotal]=useState("")

  useEffect(() => {
    // Atualiza o total sempre que o valor de "value" mudar
    setTotal(value);
  }, [value]); // Dependência para ser executado quando "value" mudar


  return (
  
       <header className='header_container'>

        <label htmlFor="data">
          <input 
          type="date"
          onChange={(e)=>{setCalendar(e.target.value)}} 
          value={calendar}/>
        
        </label>
        
        <label htmlFor="total">
            <CiShoppingCart />
            <input 
            type="text" 
            placeholder="Valor total" 
            disabled 
            onChange={(e)=>{handleTotal}}
            value={total}/>
        </label>

       </header>
    
  )
}

export default Header