import React, { Component } from 'react'
import { connect } from 'react-redux';
import { MDBIcon } from 'mdbreact';
import { remove } from '../actions/actionsContact'
import ModalComponent from './ModalComponent'
class ContactCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const { contact } = this.props;
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="our-team ">
                    <div className="picture">
                        <img className="img-fluid" src={contact.picture}/>
                    </div>
                    <div className="team-content">
                        <h3 className="name">{contact.name}</h3>
                        <h4 className="title">Tel : {contact.phone}</h4>
                        <h4 className="title">Email : {contact.mail}</h4>
                    </div>
                    <ul className="social">
                        <ModalComponent infos={contact} editMode={true} />
                        <a onClick={() => this.props.remove(contact._id)} class="btn-floating btn-sm btn-light"><MDBIcon icon="trash" /></a>
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect(null,{remove})(ContactCard)
