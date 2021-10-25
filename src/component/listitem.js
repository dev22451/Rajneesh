import React, { useState } from "react";

const ListItem = (props) => {

    const [edit, setonEdit] = useState(false);
    const [editVal, setEditVal] = useState(props.item);
    const [isChecked, setIsChecked] = useState(false);

    const onRemove = () => {
        setTimeout(() => {
            props.handleDelete();
        }, 100)

    }
    const handelEditValue = e => {
        setEditVal(e.target.value)
    }
    const onCheck = () => {
        setIsChecked({ isChecked: true })
    }

    const handelEditOn = () => {
        setonEdit(true)
    }

    const handleCancel = () => {
        setonEdit(false)
    }

    const handleSave = () => {

        if (editVal === '') {
            setEditVal(props.item)
        } else {
            props.handleEdit(editVal, props.id);
        }
        setonEdit(false)
    }
    const handleCheckboxChange = (e) => {

        setIsChecked(e.target.checked);
    }
    const toggleChange = () => {

        setIsChecked(!isChecked);


    }

    const item = props.item;

    const handleCheckOn = () => onCheck(props.id)

    if (edit) {
        return (
            <>
                <div className="form-control form-label py-3 shadow p-3 my-3 bg-white rounded" >
                    <input type="text" value={editVal} name="editVal" id="editVal" onChange={handelEditValue} />

                    <button className="btn btn-sm mx-2 float-sm-end  "><i className="fas fa-times fa-lg  text-danger" title="Cancel" onClick={handleCancel}></i></button>
                    <button className=" btn btn-sm  mb-3 float-sm-end">
                        <i className="fas fa-save fa-lg  text-warning " title="Save"
                            onClick={handleSave}></i></button>
                </div>
            </>

        );
    }
    else {
        return (
            <>
                <div className="form-control form-label py-3 shadow p-3 my-3  bg-white rounded" >
                    <input type="checkbox" className="form-check-input me-2" onChange={handleCheckboxChange} checked={isChecked} onClick={handleCheckOn} />
                    <span className="fw-bold" >{item}</span>
                    <button className="btn btn-sm mx-2 float-sm-end  " id="btnDelete" ><i className="fas fa-trash-alt fa-lg  text-danger" id="btnDelete" title="Delete" onClick={onRemove}></i></button>
                    <button className=" btn btn-sm  mb-3 float-sm-end" id="btnEdit">
                        <i
                            className="fas fa-pencil fa-lg  text-warning "
                            id="btnEdit"
                            title="Edit"
                            onClick={handelEditOn}
                        />
                    </button>
                    {isChecked ? <span
                        className="badge rounded-pill bg-secondary float-sm-end me-5 mt-1">
                        Complete
                    </span> : null}
                </div>
            </>

        );
    }
}
export default ListItem;