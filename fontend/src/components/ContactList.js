import React, { Component } from 'react'
import { connect } from 'react-redux';
import { MDBBtn, MDBIcon } from 'mdbreact';
import ContactCard from './ContactCard';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import './contactList.css'
import {getallcontact} from '../actions/actionsContact'

class ContactList extends Component {
    componentDidMount(){
        this.props.getallcontact()
    }
    render() {
        return (
            <div classeName="bac-img">
                <NavLink exact to={`/`}>
                    <MDBBtn gradient="blue"><MDBIcon icon="home" fixed /> </MDBBtn>
                </NavLink>
                <h2 className="text-center text-white " >Contact List page</h2>
                <div className="container ">
                    <div className="row ">
                        {this.props.initState.contacts.map((el, i) => <ContactCard key={i} contact={el} />)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        initState: state.Reducer
    };
};

export default connect(mapStateToProps,{getallcontact})(ContactList)
