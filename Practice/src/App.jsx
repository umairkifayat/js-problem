import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Card from './componenets/Card';

const App = () => {
const [todo , settodo] = useState([]);

const todovalue = useRef()
  const addvalue = (e) =>{
    e.preventDefault()
// console.log(todovalue.current.value);
todo.push(todovalue.current.value);
settodo([...todo])
console.log(todo);

  }


  return (
   <>
   <form  onSubmit={addvalue}>

  <input type="text" placeholder='Todo' ref={todovalue} />
  <button type='submit'>Add </button>
   </form>
   {todo.map((item, index)=>{ return <Card title={item} key={index}/>})}
   {/* {todo.length > 0 ? todo.map((item,index)=>{
        return <Card title={item} key={index} />
      }) : <h1>No data found</h1>} */}
    </>
  )
}

export default App
