import React, { useState } from 'react';

export default function InputTodo() {
  const [description, setDescription] = useState('');

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      // const body = { description };
      // const response = fetch('http://localhost:5000/todos', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(body),
      // });
      // console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h1 className='text-center mt-5'>Pern Todo List</h1>
      <form className=' d-flex mt-5'>
        <input
          type='text'
          className='form-control'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className='btn btn-success' onClick={formSubmit}>
          Add
        </button>
      </form>
    </>
  );
}
