import React, { Component } from "react";
import { connect } from 'react-redux';
import { Modal, Button } from "react-bootstrap";
import {  MDBIcon } from 'mdbreact';
import './ModalCompStyle.css';
import { add, editContact } from '../actions/actionsContact';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: this.props.editMode ? this.props.infos.name : '',
            phone: this.props.editMode ? this.props.infos.phone : '',
            mail: this.props.editMode ? this.props.infos.mail : '',
            picture: this.props.editMode ? this.props.infos.picture : '',
        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    addOReditContact = () => {
        if (this.props.editMode) {
            this.props.editContact(this.props.infos._id, this.state)
            this.setState({ show: false });
        } else {
            this.props.add({...this.state});
            this.setState({ show: false });
        }
    };
    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-info waves-effect" className={this.props.editMode ? 'btn-floating btn-sm btn-light' : 'btn btn-secondary'} variant="primary" onClick={this.handleShow}>
                    {this.props.editMode ? <MDBIcon icon="user-edit" /> : 'ADD CONTACT'}
                    
                </button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title className="tc">{this.props.editMode ? 'EDIT' : 'ADD'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="md-form mb-5">
                                <input type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder="name contact" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                <input type="text" onChange={this.handleChange} name="picture" value={this.state.picture} placeholder="link picture" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                <input type="text" onChange={this.handleChange} name="phone" value={this.state.phone} placeholder="phone contact" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                <input type="text" onChange={this.handleChange} name="mail" value={this.state.mail} placeholder="mail contact" className="form-control validate" />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
                         </Button>
                        <Button onClick={this.addOReditContact} variant="primary">
                            {this.props.editMode ? 'Edit Contact' : 'Add Contact'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default connect(null, {add,editContact})(ModalComponent);