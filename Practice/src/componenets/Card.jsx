import React from 'react'

const Card = ({title ,deletetodo, index}) => {




return (
   <>
 {title} <br />
 <button>Edit</button> 
 <button onClick={deletetodo}>Delete</button> <br />
   </>
  )
}

export default Card
