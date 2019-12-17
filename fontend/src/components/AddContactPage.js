// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { MDBBtn, MDBMask, MDBView } from 'mdbreact';
// import { add } from '../actions/actionsContact'
// import uuid from 'uuid'


// class AddContactPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             tel: '',
//             mail: '',
//             picture: '',
//             name: this.props.editMode ? this.props.infos.title : '',
//         };
//     }
   
//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     add = () => {
//         this.props.addNewMovie({ ...this.state, id: uuid() });

//     }

//     render() {
//         return (
//             <MDBView className="text-center" src="https://mdbootstrap.com/img/Photos/Others/img%20(42).jpg">
//                 <h2 className="text-white">Add Contact Page</h2>
//                 <div className="md-form mb-5">
//                     <input type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder="contact name" className="form-control validate" />
//                 </div>

//                 <div className="md-form mb-5">
//                     <input type="text" onChange={this.handleChange} name="picture" value={this.state.picture} placeholder="link picture" className="form-control validate" />
//                 </div>

//                 <div className="md-form mb-5">
//                     <input type="text" onChange={this.handleChange} name="tel" value={this.state.tel} placeholder="contact phone" className="form-control validate" />
//                 </div>

//                 <div className="md-form mb-5">
//                     <input type="text" onChange={this.handleChange} name="mail" value={this.state.mail} placeholder="contact mail" className="form-control validate" />
//                 </div>
//                 <MDBBtn onClick={this.add} gradient="purple">Add contact</MDBBtn>
//             </MDBView>

//         )
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         addNewMovie: x => dispatch(add(x)),
//     }
// }
// export default connect(null, mapDispatchToProps)(AddContactPage)
