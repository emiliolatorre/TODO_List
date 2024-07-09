// Un componente List que recorra listas de items
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoCard from "./TodoCard";
import data from './data.js';
import './TodoList.css'

const TodoList = () => {

  // ESTADOS del componente
  // representa los TO-DOs
  // [{}, {}, {}, {}]
  const [items, setItems] = useState(data);
  const [values, setValues] = useState({
    title: '',
    desc: '',
    status: ''
  });
  const [errorDesc, setErrorDesc] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  // const renderItems = () => data.map(item =>
  //   <TravelItem key={uuidv4()} title={item.title} desc={item.desc} img_url={item.img_url} />
  // );

  // FUNCIONES
  const renderItems = () => items.map((item, i) =>
    <TodoCard key={uuidv4()} dataItem={item} deleteCard={() => deleteItems(i)} editCard={() => editItems(i)} />
  );

  const clearItems = () => setItems([]);

  const resetItems = () => setItems(data);

  const deleteItems = (pos) => {
    const remainingItems = items.filter((item, index) => index !== pos)
    setItems(remainingItems)
  }

  const editItems = (pos) => {
    alert("editando item " + pos)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const status = e.target.status.value;

    // Validación de la descripción
    if (desc.length > 0 && desc.length < 6) {
      setErrorDesc(true);
      return; // Detiene la ejecución si la validación falla
    } else {
      setErrorDesc(false);
    }

    const newItem = { title, desc, status }

    setItems([...data, newItem])

    // // Limpiar el formulario
    e.target.reset()

    // forzar que desaparezca el boton
    setShowButton(false);

    // Mostrar el mensaje durante 5 segundos
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    // Validación de la descripción mientras el usuario escribe
    if (e.target.name === 'desc') {
      if (e.target.value.length > 0 && e.target.value.length < 6) {
        setErrorDesc(true);
      } else {
        setErrorDesc(false);
      }
    }
  }

  return <section>
    {/* Botón CLEAR para borrar todas las tareas */}
    <button onClick={clearItems}>Borrar todos</button>
    {/* Botón para hacer RESET de las tareas */}
    <button onClick={resetItems}>Recargar</button>

    {/* Formulario con input + boton */}
    <h2>Crea un nuevo To-Do</h2>
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" name="title" placeholder="Título" onChange={handleChange} />
      </div>

      <div>
        <input id="inputDesc" type="text" name="desc" placeholder="Descripción" onChange={handleChange} />
      </div>

      <div>
        <input type="text" name="status" placeholder="Completado / No Completado" onChange={handleChange} />
      </div>

      {
        values.title && values.desc.length > 5 && values.status &&
        (() => {
          // setShowButton(true);
          setTimeout(() => {
            setShowButton(false);
            // Resetear el formulario
            setValues({
              title: '',
              desc: '',
              status: ''
            });
          }, 5000);
        })()
      }

      {
        values.title && values.desc.length > 5 && values.status && showButton ?
          <button className="btnCreateTask" type="submit">Crear TO-DO</button> :
          null
      }

      {
        showMessage ?
          <i>To Do creado</i> : null
      }

    </form>
    {
      errorDesc ?
        <p className="pErrorDesc">la descripción debe tener al menos 6 caracteres</p> : null
    }

    <h2>Tus To-Dos</h2>
    {renderItems()}
    {/* <TravelItem title="Bahamas" desc="Disfruta de Bahamas" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPUjBwmIaW4KjJvo9oXVbzrvw2qW1eXDTrA&s"/>
    <TravelItem title="Bahamas2" desc="Disfruta de Bahamas2" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPUjBwmIaW4KjJvo9oXVbzrvw2qW1eXDTrA&s"/>
    <TravelItem title="Bahamas3" desc="Disfruta de Bahamas3" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPUjBwmIaW4KjJvo9oXVbzrvw2qW1eXDTrA&s"/>
    <TravelItem title="Bahamas4" desc="Disfruta de Bahamas4" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPUjBwmIaW4KjJvo9oXVbzrvw2qW1eXDTrA&s"/> */}
  </section>;
};

export default TodoList;
