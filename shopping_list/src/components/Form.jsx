import "./Form.css"
import { BsBagPlus } from "react-icons/bs";
import { useState } from "react";


const Form = ({data,handleAdd}) => {

  const [item,setItem]=useState("")
  const [marca,setMarca]=useState("")
  const [valor,setValor]=useState("")

  function addId(e){
    return (data.length+1)
  }
  

  function dictItemAdd(e){

    return {id:addId(),descricao:item,marca:marca,valor:valor}
  }


  return (
    <div className="form-container">
        <label htmlFor="item_descript">
            <div className="input_container">
                <input 
                type="text"  
                placeholder="Item" 
                value={item}
                onChange={(e)=>setItem(e.target.value)}/>


                <input 
                type="text" 
                placeholder="Marca" 
                value={marca}
                onChange={(e)=>setMarca(e.target.value)} />


                <input 
                type="text" 
                placeholder="Valor" 
                value={valor}
                onChange={(e)=>setValor(e.target.value)}/>

            </div>
            <label htmlFor="register" id="btnSubmit">
                 <BsBagPlus />
                 <input 
                 type="submit"  
                 onClick={(e)=>handleAdd(data,dictItemAdd())}
                 valor="Cadastrar"
                 />
            </label>
            
            
        </label>

    </div>
  )
}

export default Form