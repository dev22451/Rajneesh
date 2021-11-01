import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { useSelector } from 'react-redux';

const Form = (props) => {
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setInput(e.target.value)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (todos.length === 0) {
      dispatch(addTodo({
        name: input,
      }))
    } else {

      const validate = todos.filter((i) => i.name.toLowerCase() === input.toLowerCase());
      if (validate.length === 0) {
        dispatch(addTodo({
          name: input,
        }))


      }

    }
    setInput('');

  };

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
                value={input}
                onChange={handleSearch}
                className="form-control "
              />
              <button type="submit" className="btn btn-primary" >
                <i className="fas fa-plus-square fa-2x" title="Add Items">
                </i>
              </button>
            </div>
          </form>
        </div >
      </div >
    </>
  );
};
export default Form;