import React from "react";

class ListItem extends React.Component {
    //myRef = React.createRef();
    state = {
        onEdit: false,
        editVal: this.props.item,
        isChecked: false

    }

    onRemove = () => {
        setTimeout(() => {
            this.props.handleDelete();
        }, 100)

    }

    handelEditValue = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })


    }
    onCheck = () => {
        this.setState({ isChecked: true })
    }

    onEdit = () => {
        this.setState({ onEdit: true })
    }


    handleCancel = () => {
        this.setState({ onEdit: false })
    }

    handleSave = () => {
        const { editVal } = this.state;
        if (editVal === '') {
            this.setState({ editVal: this.props.item })
        } else {
            this.props.handleEdit(editVal, this.props.id);
        }
        this.setState({ onEdit: false })
    }
    handleCheckboxChange = (e) => {

        this.setState({ isChecked: e.target.checked });
    }
    toggleChange = () => {

        this.setState({ isChecked: !this.state.isChecked });
        console.log("check")

    }
    /*isChecked = () => {
        this.setState({ isChecked: true })
        console.log("check")
    }*/




    render() {
        const { item, handleDelete, toggleChange } = this.props;


        if (this.state.onEdit) {
            return (
                <>
                    <div className="form-control form-label py-3 shadow p-3 my-3 bg-white rounded" >
                        <input type="text" value={this.state.editVal} name="editVal" id="editVal" onChange={this.handelEditValue} />

                        <button className="btn btn-sm mx-2 float-sm-end  "><i className="fas fa-times fa-lg  text-danger" title="Cancel" onClick={this.handleCancel}></i></button>
                        <button className=" btn btn-sm  mb-3 float-sm-end"><i className="fas fa-save fa-lg  text-warning " title="Save" onClick={this.handleSave}></i></button>
                    </div>
                </>

            );
        }
        else {
            return (
                <>
                    <div className="form-control form-label py-3 shadow p-3 my-3  bg-white rounded" >
                        <input type="checkbox" className="form-check-input me-2" onChange={this.handleCheckboxChange} checked={this.state.isChecked} onClick={() => this.onCheck(this.props.id)} />
                        <span className="fw-bold" >{item}</span>
                        <button className="btn btn-sm mx-2 float-sm-end  " id="btnDelete" disabled={this.state.isChecked}><i className="fas fa-trash-alt fa-lg  text-danger" id="btnDelete" title="Delete" onClick={this.onRemove}></i></button>
                        <button className=" btn btn-sm  mb-3 float-sm-end" id="btnEdit" disabled={this.state.isChecked}><i className="fas fa-pencil fa-lg  text-warning " id="btnEdit" title="Edit" onClick={() => this.onEdit(item.id)} ></i></button>
                        {this.state.isChecked ? <span className="badge rounded-pill bg-secondary float-sm-end me-5 mt-1">Complete</span> : null}
                    </div>
                </>

            );


        }


    }

}

export default ListItem;