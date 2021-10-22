import React from "react";
import ListItem from "./listitem";


class List extends React.Component {




    render() {
        const { todo, onDelete, onEdit } = this.props;

        return (
            <>
                <div className="row justify-content-center  ">
                    <div className="col-sm-4 bg-secondary pb-3 shadow-lg rounded py-4">
                        {
                            todo.map((item) => {
                                const handleDeleteOn = () => { onDelete(item.id) }
                                const filterValue = this.props.filterValue;
                                const todoName = item.todo;

                                if ((!filterValue) || (todoName.indexOf(filterValue) !== -1)) {
                                    return <ListItem
                                        item={item.todo}
                                        key={item.id}
                                        handleDelete={handleDeleteOn}
                                        handleEdit={onEdit}
                                        id={item.id}

                                    />
                                }
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default List;