import React from 'react';
import { MDBBtn, MDBMask, MDBView } from 'mdbreact';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import ModalComponent from './ModalComponent'

class FullPageIntroWithNonFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: null
    };
  }
 
  render() {
    return (
      <div>
        <header>
          <MDBView  src="https://mdbootstrap.com/img/Photos/Others/img%20(42).jpg">

            <MDBMask className="view view" overlay="indigo-slight" className=" flex-center flex-column text-white text-center">

              <h2>CONTACT APP</h2>

              <div className="mt d-flex">

                <NavLink to="/ContactList">
                  <MDBBtn className="mr" rounded outline color="secondary">Contact List</MDBBtn>
                </NavLink>

                <ModalComponent editMode={false} />

              </div>
            </MDBMask>
            
          </MDBView>
        </header>
      </div>
    );
  }
}
export default FullPageIntroWithNonFixedTransparentNavbar;