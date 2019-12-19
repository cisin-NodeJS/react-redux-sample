import React from 'react';
import { connect } from 'react-redux';

const GuestLayout = function GuestLayout({ children, history, users, data }) {
console.log("TCL: GuestLayout -> can", data)

    // if(users.loggedIn) {
    //     history.push('/home');
    //     return <p>Go to</p>;
    // }

    return <>
        {children}
    </>
}

function mapStateToProps(state) {
    const { users } = state;
    return {
      users
    };
  }
  
export default connect(mapStateToProps)(GuestLayout);