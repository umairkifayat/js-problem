import React, { useRef, useState } from 'react';

const Card = ({ title, deletetodo, editedval, index }) => {
  const [edit, setEdit] = useState(true);
  const editva = useRef();

  const edited = (e) => {
      e.preventDefault();
    editedval(index, editva.current.value)
    // console.log(editval.current.value);
    setEdit(true);
  };

  return (
    <>
      {edit ? (
        <div>
          {title} <br />
          <button onClick={() => setEdit(false)}>Edit</button>
          <button onClick={deletetodo}>Delete</button> <br />
        </div>
      ) : (
        <form onSubmit={edited}>
          <input type="text" ref={editva} placeholder="edit todo" />
          <button type='submit'>Save</button>
        </form>
      )}
    </>
  );
};

export default Card;
