import './Header.css'
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
  
       <header className='header_container'>

        <label htmlFor="data"><input type="date" /></label>
        
        <label htmlFor="total">
            <CiShoppingCart />
            <input type="text" placeholder="Valor total" disabled />
        </label>

       </header>
    
  )
}

export default Header