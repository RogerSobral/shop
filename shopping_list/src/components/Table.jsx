import './Table.css'
import { FaTrash, FaEdit } from 'react-icons/fa';

const Table = ({data,handleEdit,handleDelete}) => {
    // const data = [
    //     { id: 1, descricao: "Notebook", marca: "Dell", valor: "R$ 4.500,00" },
    //     { id: 2, descricao: "Smartphone", marca: "Samsung", valor: "R$ 2.300,00" },
    //     { id: 3, descricao: "Headphone", marca: "Sony", valor: "R$ 350,00" },
    //   ];

    

   


  return (
    <div className='table_container'>
       <h1>Tabela de Produtos</h1>
  <table>
    <thead>
      <tr>
        <th>Descrição</th>
        <th>Marca</th>
        <th>Valor</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
        {data.map((item)=>(
            <tr key={item.id}>
                <td >{item.descricao}</td>
                <td >{item.marca}</td>
                <td >{item.valor}</td>
                <td>
                    <button onClick={() => handleEdit(item.id)} className='actionButton'>
                            <FaEdit style={{ color: 'blue' }} />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className='actionButton' >
                            <FaTrash style={{ color: 'red' }} />
                    </button>

                </td>
            </tr>

        ))}
    </tbody>
  </table>
        </div>
  )
}

export default Table