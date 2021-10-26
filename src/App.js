import React, { useState } from "react";
import Form from "./component/form";
import List from "./component/list";

const App = (props) => {

  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');

  const handleCheck = (checked, id) => {
    const getData = [...data]
    getData.map((item) => {
      if (item.id === id) {
        item.isChecked = checked;
      }
      return item
    });
    setData(getData)
  }
  const serText = (serVal) => {
    setFilterText(serVal)
  }

  const handleSubmit = (newVal, todo) => {
    const arrData = data.map((item) => {
      return item.todo
    })
    const validate = arrData.map(e => e.toLocaleLowerCase()).includes(todo.toLocaleLowerCase());
    if (validate === false && todo !== "") {
      setData([...data, newVal])
    }
  }
  const handleRemove = (index) => {

    const updateItems = data.filter((item) => {
      return index !== item.id;
    })
    setData(updateItems);
  }

  const handleOnEdit = (editVal, id) => {
    const getData = [...data]

    getData.map((item) => {
      if (item.id === id) {
        item.todo = editVal;
      }
      return item
    });

    setData(getData)
  }

  return (
    <div>
      <div className="container-fluid ">
        <Form onSubmit={handleSubmit}
          onSearch={serText}
        />
        <List todo={data}
          onDelete={handleRemove}
          onEdit={handleOnEdit}
          filterValue={filterText}
          handleOnCheck={handleCheck}
        />
      </div>
    </div >
  )
}
export default App;
