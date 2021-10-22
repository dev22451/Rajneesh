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
  handleSearch = (e) => {
    this.props.onSearch(e.target.value)
    const { name, value } = e.target;

    this.setState({
      [name]: value, id: new Date().getTime().toString(),
    })

  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state, this.state.todo)
    this.setState({ todo: '' })
    this.props.onSearch('')



  }


  render() {
    const { todo } = this.state;


    return (
      <>
        <div className="row justify-content-center px-5  ">
          <div className="col-sm-4 bg-secondary mt-5 px-4">
            <form onSubmit={this.handleOnSubmit}>
              <h1 className="text-center text-primary pt-3">To Do List </h1><br />
              <div className="input-group mb-3 px-4">


                <input type="text" name="todo" id="todo" value={todo} onChange={this.handleSearch} className="form-control " placeholder="search" />
                <button type="submit" className="btn btn-primary" ><i className="fas fa-plus-square fa-2x" title="Add Items"></i></button>
              </div>
            </form>
          </div >
        </div >

      </>
    );

  }
}

export default Form;