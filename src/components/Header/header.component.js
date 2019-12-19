import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { logout } from '../../_actions/user.action';
import { connect } from 'react-redux';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this._logout = this._logout.bind(this);
    }


    _logout() {
        const { dispatch } = this.props;
        dispatch(logout());
    }

    render() {
        return (
            <header>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">react redux sample</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>Components</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret> Options </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this._logout}>logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        )
    }

}

function mapStateToProps(state) {

    const { logout } = state;

    return {
        logout
    }
}

export default connect(mapStateToProps)(Header);