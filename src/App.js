import React, { useState } from "react";
import Form from "./component/form";
import List from "./component/list";


const App = (props) => {

  const [data, setData] = useState([{ id: new Date().getTime().toString(), todo: "Apple" }]);
  const [filterText, setFilterText] = useState('');


  const serText = (serVal) => {
    setFilterText(serVal)
  }

  const handleSubmit = (newVal, todo) => {
    if (todo !== "") {
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
    const abc = [...data]

    abc.map((item) => {
      if (item.id === id) {
        item.todo = editVal;
      }
      return item
    });

    setData(abc)
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
        />

      </div>
    </div >


  )
}


export default App;
