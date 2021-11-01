import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from '../redux/todoSlice';

const ListItem = (props) => {
    const dispatch = useDispatch();
    const data = props.item;
    const id = props.id;
    const completed = props.checked;

    const [edit, setonEdit] = useState(false);
    const [editVal, setEditVal] = useState(data);
    const handleCompleteClick = () => {
        dispatch(
            toggleComplete({ id: id, completed: !completed }));
    }

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id: id }));
    }
    const handelEditValue = e => setEditVal(e.target.value);
    const handelEditOn = () => setonEdit(true);

    const handleCancel = () => setonEdit(false);

    const handleSave = () => {
        if (editVal === '') {
            dispatch(editTodo({ id: id, name: data }));
        } else {
            dispatch(editTodo({ id: id, name: editVal }));
        }
        setonEdit(false);
    };

    if (edit) {
        return (
            <>
                <div className="form-control form-label py-3 shadow p-3 my-3 bg-white rounded" >
                    <input
                        type="text"
                        value={editVal}
                        name="editVal"
                        id="editVal"
                        onChange={handelEditValue}
                    />
                    <button
                        className="btn btn-sm mx-2 float-sm-end  ">
                        <i
                            className="fas fa-times fa-lg  text-danger"
                            title="Cancel"
                            onClick={handleCancel}
                        />
                    </button>
                    <button
                        className=" btn btn-sm  mb-3 float-sm-end">
                        <i
                            className="fas fa-save fa-lg  text-warning "
                            title="Save"
                            onClick={handleSave}
                        />
                    </button>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="form-control form-label py-3 shadow p-3 my-3  bg-white rounded" >
                    <input
                        type="checkbox"
                        className="form-check-input me-2"
                        onChange={handleCompleteClick}
                        checked={completed}
                    />
                    <span className="fw-bold" >{data}</span>
                    <button
                        className="btn btn-sm mx-2 float-sm-end  " id="btnDelete" >
                        <i
                            className="fas fa-trash-alt fa-lg  text-danger"
                            id="btnDelete"
                            title="Delete"
                            onClick={handleDeleteClick}
                        />
                    </button>
                    <button className=" btn btn-sm  mb-3 float-sm-end" id="btnEdit">
                        <i
                            className="fas fa-pencil fa-lg  text-warning "
                            id="btnEdit"
                            title="Edit"
                            onClick={handelEditOn}
                        />
                    </button>
                    {completed ? <span
                        className="badge rounded-pill bg-secondary float-sm-end me-5 mt-1">
                        Complete
                    </span> : null}
                </div>
            </>
        );
    }
};
export default ListItem;