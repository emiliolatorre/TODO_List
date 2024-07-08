import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoCard from "./TodoCard";
import data from './data.js';

const TodoList = () => {

  // Estado del componente
  // representa los TO-DOs
  // [{}, {}, {}, {}]
  const [items, setItems] = useState(data);
  const [values, setValues] = useState({
    title: '',
    desc: '',
    img_url:''
});

  // const renderItems = () => data.map(item =>
  //   <TravelItem key={uuidv4()} title={item.title} desc={item.desc} img_url={item.img_url} />
  // );

  const renderItems = () => items.map((item, i) =>
    <TodoCard key={uuidv4()} dataItem={item} deleteCard={()=>deleteItems(i)} editCard = {()=>editItems(i)}/>
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
    const img_url = e.target.img_url.value;

    const newItem = {title, desc, img_url}

    setItems([...data, newItem])
  }

  const handleChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
}

  return <section>
    <button onClick={clearItems}>Borrar todos</button>
    <button onClick={resetItems}>Recargar</button>
    <button onClick={() => deleteItems(2)}>Borrar segundo</button>

    <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name">Título</label>
          <input type="text" name="title" onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="price">Descripción</label>
          <input type="text" name="desc" onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="url">URL imagen</label>
          <input type="url" name="img_url" onChange={handleChange}/>
        </div>

        {
        values.title && values.desc && values.img_url?
        <button type="submit">Crear TO-DO</button>:
        <i>Por Favor, rellena todos los campos</i>
        }

      </form>


    {renderItems()}
    {/* <TravelItem title="Bahamas" desc="Disfruta de Bahamas" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPUjBwmIaW4KjJvo9oXVbzrvw2qW1eXDTrA&s"/>
    <TravelItem title="Bahamas2" desc="Disfruta de Bahamas2" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPUjBwmIaW4KjJvo9oXVbzrvw2qW1eXDTrA&s"/>
    <TravelItem title="Bahamas3" desc="Disfruta de Bahamas3" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPUjBwmIaW4KjJvo9oXVbzrvw2qW1eXDTrA&s"/>
    <TravelItem title="Bahamas4" desc="Disfruta de Bahamas4" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPUjBwmIaW4KjJvo9oXVbzrvw2qW1eXDTrA&s"/> */}
  </section>;
};

export default TodoList;
