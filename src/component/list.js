import React from 'react';
import ListItem from './listitem';
import { useSelector } from 'react-redux';

const List = (props) => {
    const todos = useSelector((state) => state.todos);
    return (
        <>
            <div className="row justify-content-center  ">
                <div className="col-sm-4 bg-secondary pb-3 shadow-lg rounded py-4">
                    {
                        todos.map((item) => {

                            const filterValue = props.filterValue;
                            const todoName = item.name;
                            if (
                                (!filterValue) ||
                                (todoName.toLowerCase().search(filterValue.toLowerCase())
                                    !== -1)
                            ) {
                                return <ListItem
                                    item={todoName}
                                    key={item.id}
                                    handleEdit={props.onEdit}
                                    id={item.id}
                                    filterVar={filterValue}
                                    onChecked={props.handleOnCheck}
                                    checked={item.completed}
                                />;
                            }
                            return null;
                        })
                    }
                </div>
            </div>
        </>
    );
};


export default List;