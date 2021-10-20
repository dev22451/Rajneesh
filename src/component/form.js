import React from "react";

class Form extends React.Component {

  state = {

    id: '',
    todo: '',
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value, id: new Date().getTime().toString(),
    })

  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({ todo: '' })


  }

  render() {
    const { todo } = this.state;
    //console.log(todo)

    return (
      <>
        <div className="row justify-content-center px-5  ">
          <div className="col-sm-4 bg-secondary mt-5 px-4">
            <form onSubmit={this.handleOnSubmit}>
              <h1 className="text-center text-primary pt-3">To Do List </h1><br />
              <div className="input-group mb-3 px-4">

                <input type="text" name="todo" id="todo" value={todo} onChange={this.handleInput} className="form-control " placeholder="Add Items..." />
                <button type="submit" className="btn btn-primary" disabled={this.state.todo === ''}><i className="fas fa-plus-square fa-2x" title="Add Items"></i></button>
              </div>
            </form>
          </div >
        </div >

      </>
    );

  }
}

export default Form;