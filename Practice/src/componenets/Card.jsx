import React, { useRef, useState } from 'react'

const Card = ({title ,deletetodo ,edittodo ,index} ) => {
const [showdata , setdata] = useState(true)
const editvalue = useRef();
const edit = (e)=>{
  e.preventDefault();
  // console.log(editvalue.current.value);
  edittodo(index,editvalue.current.value)
  setdata(true)

}

  return (
<>
{showdata ?<div>

   {title} <br />
   <button onClick={() => setdata(false)}>Edit</button>
   <button onClick={deletetodo}>Delete</button> <br />
</div> : <form >
  <input type="text" placeholder='edited todo' ref={editvalue} />
  <button type='submit' onClick={edit}>save</button>
  </form>}

</>
  )
}

export default Card
