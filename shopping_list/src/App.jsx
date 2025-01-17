
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import Table from './components/Table'

// Hooks
  import { useState } from 'react'

function App() {
  const dataItens = [
    { id: 1, descricao: "Notebook", marca: "Dell", valor: "R$ 4.500,00" },
    { id: 2, descricao: "Smartphone", marca: "Samsung", valor: "R$ 2.300,00" },
    { id: 3, descricao: "Headphone", marca: "Sony", valor: "R$ 350,00" },
  ];
  

  // garantir o id unico 
  function addId() {
    return data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;
  }

  function handleTotal() {
    let sum = 0;
    data.forEach((item) => {
     
      const valor = parseFloat(item.valor.replace('R$', '').replace('.', '').replace(',', '.'));
      sum += valor;
    });
    
    setValueTotal(sum)
  }

  const handleAdd=(item)=>{
    console.log(item)//verificar essa linha

    const newItem = {
      id: addId(),
      descricao: item.descricao,
      marca: item.marca,
      valor: item.valor,
    };

    const updatedData = [...data, newItem];
    
    setData(updatedData)

    handleTotal()
  
    
    
  }

  const handleEdit = (id) => {
    const itemToEdit = data.find(item => item.id === id);
    if (itemToEdit) {
      setEditItemId(id);
      setChangeBtnUpdate(false); // Muda para modo de edição
    }
  };

  const handleDelete=(id)=>{
    
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    console.log(`Item com ID ${id} foi deletado.`);
  }




  const handleUpdate = (updatedItem) => {
    console.log("Atualizando item:", updatedItem);
    const updatedData = data.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    console.log("Dados atualizados:", updatedData);
    setData(updatedData);
    setEditItemId(null);
    setChangeBtnUpdate(true);
  };
  

    const [data,setData]=useState(dataItens)
    const [editItemId, setEditItemId] = useState(null);
    const [changeBtnUpdate,setChangeBtnUpdate]=useState(true)
    const [valueTotal,setValueTotal]=useState(0)


  return (
    <div className='app'>
      <h1>Lista de Compras</h1>
      <Header value={valueTotal}/>
      <Form 
      data={data} 
      handleAdd={handleAdd}  
      changeBtnUpdate={changeBtnUpdate} 
      formItem={data.find((item) => item.id === editItemId)}
      handleUpdate={handleUpdate} 
      />
      <hr/>

      <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete}  />


    </div>
      
  )
}

export default App
