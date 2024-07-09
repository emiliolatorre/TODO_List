import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css'


function App() {
  const inputRef = useRef(null);
  
  const handleButtonClick = () => {
    alert(`Valor del input: ${inputRef.current.value}`);
  };

  //Estado
  const [count, setCount] = useState(100)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
