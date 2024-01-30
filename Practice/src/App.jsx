import React, { useRef, useState } from 'react'
import Card from './componenets/Card'

const App = () => {


const [todo, settodo ] = useState([])

const  inputval = useRef()
const addtodo = (e) =>{
  e.preventDefault();
console.log(inputval.current.value);

todo.push(inputval.current.value)
settodo([...todo])    
console.log(todo);
}
const deletetodo = (index) =>{
  console.log('delete clicked',index);
  todo.splice(index,1);
  settodo([...todo])
}
const editedval = (index,value) =>{
  console.log('clicked edited' , value, index);
  todo.splice(index , 1 , value);
  settodo([...todo])
}




  return (
   <>
  <form onSubmit={addtodo}>
    <input type="text" placeholder='todos' ref={inputval}/>
    <button type="submit">add</button>
  </form>
   {todo.map((item,index)=>{
     return  <Card title = {item} key={index} deletetodo ={()=>deletetodo(index)} editedval ={editedval} index={index}/>
    })}
    </>
  )
}

export default App
