import "./Form.css"
import { BsBagPlus, BsPencilSquare } from "react-icons/bs";
import { useState, useEffect } from "react";

const Form = ({ handleAdd, changeBtnUpdate, formItem, handleUpdate }) => {
  const [item, setItem] = useState("");
  const [marca, setMarca] = useState("");
  const [valor, setValor] = useState("");

  // Preencher os campos ao entrar em modo de edição
  useEffect(() => {
    if (!changeBtnUpdate && formItem) {
      setItem(formItem.descricao || "");
      setMarca(formItem.marca || "");
      setValor(formItem.valor || "");
    }
  }, [changeBtnUpdate, formItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (changeBtnUpdate) {
      // Adicionar novo item
      handleAdd({ descricao: item, marca, valor });
    } else {
      // Atualizar item existente
      handleUpdate({ id: formItem.id, descricao: item, marca, valor });
    }

    // Limpar campos e resetar estados
    setItem("");
    setMarca("");
    setValor("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_descript">
          <div className="input_container">
            <input
              type="text"
              placeholder="Item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <input
              type="text"
              placeholder="Marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
            <input
              type="text"
              placeholder="Valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <button className="changeBnt">
            {changeBtnUpdate ? (
              <>Enviar <BsBagPlus /> </>
            ) : (
              <>Atualizar<BsPencilSquare /></>
            )}
          </button>
        </label>
      </form>
    </div>
  );
};

export default Form;
