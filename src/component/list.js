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
                                console.log(item)
                                return <ListItem
                                    item={item.todo}
                                    key={item.id}
                                    handleDelete={() => { onDelete(item.id) }}
                                    handleEdit={onEdit}
                                    id={item.id}
                                />
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default List;