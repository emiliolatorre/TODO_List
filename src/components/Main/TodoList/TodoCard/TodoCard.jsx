import React from "react";
import './TodoItem.css'

const TodoItem = ({dataItem:{title,desc,img_url}, deleteCard, editCard}) => {
  return <article>
    <h3>Título: {title}</h3>
    <p>Descripción: {desc}</p>
    <img src={img_url} alt={title} className="pigture"/>
    <div>
    <button onClick={deleteCard} >Borrar</button>
    <button onClick={editCard} >Editar</button>
    </div>
    </article>;
};

export default TodoItem;
