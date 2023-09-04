import React, { useState } from 'react';
import SingleColor from './SingleColor'
import Values from 'values.js'

import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false); //ex not color value
  const [list, setList] = useState(new Values('#f15025').all(10)); //list of color shades to be displayed by percentage value.

const handleSubmit =(e)=> {
  e.preventDefault();
  console.log('handleSubmit')
  
  try {
    let colors = new Values(color).all(20);
    setList(colors);
    console.log(colors);
  } catch (error) {
    setError(true);
    console.log(error);
  }
}  

  return (
    <>
    <section className='container'>
      <h2>color generator</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={color} 
          onChange={(e)=> setColor(e.target.value)} 
          placeholder='#f15025'
          
          className={`${error ? 'error' : null}`} // if error set border to red
        />
        <button className='btn' type='submit'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color,index)=>{
        console.log(color);
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
      })}
    </section>
    </>
    

  );
}

export default App;
