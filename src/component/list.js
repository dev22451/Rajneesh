import React from "react";
import ListItem from "./listitem";

const List = (props) => {
    const data = props.todo;
    return (
        <>
            <div className="row justify-content-center  ">
                <div className="col-sm-4 bg-secondary pb-3 shadow-lg rounded py-4">
                    {
                        data.map((item) => {
                            const handleDeleteOn = () => props.onDelete(item.id);
                            const filterValue = props.filterValue
                            const todoName = item.todo
                            if (
                                (!filterValue) ||
                                (todoName.toLowerCase().search(filterValue.toLowerCase())
                                    !== -1)
                            ) {
                                return <ListItem
                                    item={todoName}
                                    key={item.id}
                                    handleDelete={handleDeleteOn}
                                    handleEdit={props.onEdit}
                                    id={item.id}
                                    filterVar={filterValue}
                                    onChecked={props.handleOnCheck}
                                    checked={item.isChecked}
                                />
                            }
                            return null
                        })
                    }
                </div>
            </div>
        </>
    );
}


export default List;