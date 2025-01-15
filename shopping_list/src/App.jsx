
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

  const handleAdd=(data,item)=>{
    // data.push(item)
    console.log(`dentro ${item.marca} `)
    // setData(data)
  }

  const handleEdit=(id)=>{
    console.log(`O id a ser Editado é ${id}`)

  }

  const handleDelete=(id)=>{
    console.log(`O id a ser Deletado é ${id}`)
  }

    const [data,setData]=useState(dataItens)


  return (
    <div className='app'>
      <h1>Lista de Compras</h1>
      <Header/>
      <Form data={data} handleAdd={handleAdd}  />
      <hr/>

      <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete}  />


    </div>
      
  )
}

export default App
