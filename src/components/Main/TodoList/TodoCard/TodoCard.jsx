// Un componente Item o Card que contenga cada TO-DO
import React from "react";
import './TodoCard.css'

const TodoItem = ({ dataItem: { title, desc, status }, deleteCard, editCard }) => {
  return <article>
    <div className="text-container">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p className="status">Status: {status}</p>
      <div className="button-container">
        {/* Botón BORRAR, asociado a cada tarea, para poder borrar de manera independiente */}
        <button className="btnDelete" onClick={deleteCard} >Borrar</button>
        <button className="btnEdit" onClick={editCard} >Editar</button>
      </div>
    </div>
  </article>;
};

export default TodoItem;
