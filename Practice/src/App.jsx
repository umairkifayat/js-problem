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

const deletetodo = (index) =>{
  console.log('delete todo', index);
  todo.splice( index , 1 );
  settodo([...todo])
}
const edittodo = (index,value)=>{
  // console.log('edit todo',value);
  todo.splice(index, 1 ,value)
  settodo([...todo])
}

  return (
   <>
   <form  onSubmit={addvalue}>

  <input type="text" placeholder='Todo' ref={todovalue} />
  <button type='submit'>Add </button>
   </form>
   {todo.map((item, index)=>{ return <Card title={item} key={index}  deletetodo = {() => deletetodo(index)} edittodo={edittodo} index ={index} />})}
    </>
  )
}

export default App
