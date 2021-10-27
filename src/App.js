import React, { useState } from "react";
import Form from "./component/form";
import List from "./component/list";

const App = (props) => {

  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');

  const handleCheck = (checked, id) => {
    const newData = [...data]
    newData.map((item) => {
      if (item.id === id) {
        item.isChecked = checked;
      }
      return item
    });
    setData(newData)
    return null

  }
  const serText = (serVal) => {
    setFilterText(serVal)
  }

  const handleSubmit = (newVal, val) => {
    if (data.length === 0) {
      setData([...data, newVal])
    } else {
      data.map((item) => {
        const validate = data.filter((i) => i.todo.toLowerCase() === val.toLowerCase());
        if (validate.length === 0) {
          setData([...data, newVal])
        } return null
      });
    }

  }
  const handleRemove = (index) => {

    const updateItems = data.filter((item) => {
      return index !== item.id;
    })
    setData(updateItems);
  }

  const handleOnEdit = (editVal, id) => {
    const newData = [...data]

    newData.map((item) => {
      if (item.id === id) {
        item.todo = editVal;
      }
      return item
    });

    setData(newData)
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
