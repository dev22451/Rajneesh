import React, { useState } from "react";

const Form = (props) => {

  const [input, setInput] = useState({ id: '', todo: '' });


  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput({
      [name]: value, id: new Date().getTime().toString(),
    })

  }
  const handleSearch = (e) => {
    props.onSearch(e.target.value)
    const { name, value } = e.target;

    setInput({
      [name]: value, id: new Date().getTime().toString(),
    })

  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input, input.todo)
    setInput({ todo: '' })
    props.onSearch('')
  }
  const todo = input.todo;

  return (
    <>
      <div className="row justify-content-center px-5  ">
        <div className="col-sm-4 bg-secondary mt-5 px-4">
          <form onSubmit={handleOnSubmit}>
            <h1 className="text-center text-primary pt-3">To Do List </h1><br />
            <div className="input-group mb-3 px-4">


              <input type="text" name="todo" id="todo" value={todo} onChange={handleSearch} className="form-control " placeholder="search" />
              <button type="submit" className="btn btn-primary" ><i className="fas fa-plus-square fa-2x" title="Add Items"></i></button>
            </div>
          </form>
        </div >
      </div >

    </>
  )

}


export default Form;