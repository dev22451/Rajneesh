import React from "react";
import Form from "./component/form";
import List from "./component/list";


class App extends React.Component {

  state = {
    data: [{ id: new Date().getTime().toString(), todo: "Apple" }],
    filterText: ''

  }

  serText = (serVal) => {
    this.setState({ filterText: serVal });

  }

  handleSubmit = (newVal, todo) => {
    const { data } = this.state

    if (todo !== "") {
      this.setState({ data: [...this.state.data, newVal] })
    }
  }

  handleRemove = (index) => {
    const { data } = this.state;
    this.setState({
      data: data.filter((item) => {
        return index !== item.id;
      })
    })
  }

  handleOnEdit = (editVal, id) => {
    const { data } = this.state

    data.forEach((item) => {
      if (item.id === id) {
        item.todo = editVal;
      }

    });
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;


    return (
      <div>
        <div className="container-fluid ">
          <Form onSubmit={this.handleSubmit}
            onSearch={this.serText}

          />
          <List todo={data}
            onDelete={this.handleRemove}
            onEdit={this.handleOnEdit}
            filterValue={this.state.filterText}
          />

        </div>
      </div >


    );
  }

}
export default App;
