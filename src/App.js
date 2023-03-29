import './App.css';
import LogoDinoco from './components/logo';
import Button from './components/Button.jsx';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if(input){
      setInput(evaluate(input));
    } else{
      alert("Ingrese valores rales.");
    }
  };

  return (
    <div className="App">
    <LogoDinoco></LogoDinoco>
      <div className='container-calculator'>
      <Screen input={input} />
        <div  className='fila'>
          <Button driveClick={addInput}>1</Button>
          <Button driveClick={addInput}>2</Button>
          <Button driveClick={addInput}>3</Button>
          <Button driveClick={addInput}>+</Button>
        </div>
        <div  className='fila'>
          <Button driveClick={addInput}>4</Button>
          <Button driveClick={addInput} >5</Button>
          <Button driveClick={addInput} >6</Button>
          <Button driveClick={addInput}>-</Button>
        </div>
        <div  className='fila'>
          <Button driveClick={addInput} >7</Button>
          <Button driveClick={addInput} >8</Button>
          <Button driveClick={addInput} >9</Button>
          <Button driveClick={addInput}>*</Button>
        </div>
        <div  className='fila'>
          <Button driveClick={calculateResult} >=</Button>
          <Button driveClick={addInput} >0</Button>
          <Button driveClick={addInput} >.</Button>
          <Button driveClick={addInput}>/</Button>
        </div>
        <div  className='fila'>
          <ButtonClear clearInput={() => setInput('')} >Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
