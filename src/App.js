import React from "react";
import Form from "./component/form";
import List from "./component/list";


class App extends React.Component {

  state = {
    data: [{ id: new Date().getTime().toString(), todo: "Apple" }]
  }


  handleSubmit = (newVal) => {

    this.setState({ data: [...this.state.data, newVal] })

  }

  handleRemove = (index) => {
    const { data } = this.state;
    this.setState({
      data: data.filter((item) => {
        return index !== item.id;
        //console.log(data.filter(item, i))
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
    console.log(this.state);
    //console.log(data[0].todo);
    return (
      <div>
        <div className="container-fluid ">
          <Form onSubmit={this.handleSubmit} />
          <List todo={data}
            onDelete={this.handleRemove}
            onEdit={this.handleOnEdit}
          />

        </div>
      </div>


    );
  }

}
export default App;
