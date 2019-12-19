import React from 'react'
import Header from '../../components/Header'
import { Container } from 'reactstrap'
import Collapse from '../../components/Collapse/collapse.component';
import { connect } from 'react-redux';

const DefaultLayout = function DefaultLayout(props) {
    let { children, users, history } = props;

    if(!users.loggedIn) {
        history.push('/');
        return <p>You're not authorized to view this page!</p>
    }

    return <>
        <Header />
        <Collapse>
            <p>Default route</p>
        </Collapse>
        <Container>
            {children}
        </Container>
    </>

}

function mapStateToProps(state) {
    const { users } = state;
    return {
      users
    };
  }
  
export default connect(mapStateToProps)(DefaultLayout);