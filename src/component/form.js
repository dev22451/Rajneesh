import React, { useState } from "react";

const Form = (props) => {

  const [input, setInput] = useState({ id: '', todo: '', isChecked: null });

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
      [name]: value, id: new Date().getTime().toString(), isChecked: false,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input, input.todo)
    setInput({ todo: '' })
    props.onSearch('')
  }

  const todoVal = input.todo;

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-4 bg-secondary mt-5 ">
          <form onSubmit={handleOnSubmit}>
            <h1 className="text-center text-light pt-3">To Do List </h1><br />
            <div className="input-group mb-3 px-4">
              <input
                type="text"
                name="todo"
                id="todo"
                value={todoVal}
                onChange={handleSearch}
                className="form-control "
              />
              <button type="submit" className="btn btn-primary" >
                <i className="fas fa-plus-square fa-2x" title="Add Items"></i>
              </button>
            </div>
          </form>
        </div >
      </div >
    </>
  )
}
export default Form;