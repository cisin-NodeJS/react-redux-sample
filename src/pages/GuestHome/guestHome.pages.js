import React from 'react'
import './guestHome.pages.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { login, register } from '../../_actions/user.action';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';


class GuestHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            email: '',
            pswd: '',
            reg_email: ''
        };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, pswd } = this.state;
        const { dispatch } = this.props;

        dispatch(login(email, pswd)).then(data => {
            if (this.props.users.loggedIn) {
                this.props.history.push('/home');
            }
        })
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleRegister(e) {
        e.preventDefault();
        const { reg_email } = this.state;
        const { dispatch } = this.props;

        dispatch(register(reg_email));
    }

    render() {
        return (
            <div className="main-guest h-100">
                <div className="bg-overlay h-100 w-100">
                    <div className="bg"> </div> <div className="bg bg2"> </div>{" "}
                    <div className="bg bg3"> </div>{" "}
                </div>
                <Container>
                    <Row className="title-tab justify-content-start"></Row>{" "}
                    <Row className="justify-content-end">
                        <Col sm="6" className="rounded border bg-white">
                            <Nav tabs className="mt-3">
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active: this.state.activeTab === "1"
                                        })}
                                        onClick={() => {
                                            this.toggle("1");
                                        }}
                                    >
                                        Login{" "}
                                    </NavLink>{" "}
                                </NavItem>{" "}
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active: this.state.activeTab === "2"
                                        })}
                                        onClick={() => {
                                            this.toggle("2");
                                        }}
                                    >
                                        Register{" "}
                                    </NavLink>{" "}
                                </NavItem>{" "}
                            </Nav>{" "}
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <div className="p-5">
                                                <Form onSubmit={this.handleSubmit}>
                                                    <FormGroup>
                                                        <Label for="exampleEmail"> Email </Label>{" "}
                                                        <Input
                                                            value={this.state.email}
                                                            onChange={this.handleChange}
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            placeholder="Enter your email"
                                                        />
                                                    </FormGroup>{" "}
                                                    <FormGroup>
                                                        <Label for="pswd"> Password </Label>{" "}
                                                        <Input
                                                            value={this.state.pswd}
                                                            onChange={this.handleChange}
                                                            type="password"
                                                            name="pswd"
                                                            id="pswd"
                                                            placeholder="Enter your password"
                                                        />
                                                    </FormGroup>{" "}
                                                    <Button
                                                        className=" col-12 mb-3"
                                                        onSubmit={this.handleSubmit}
                                                    >
                                                        {" "}
                                                        Login{" "}
                                                    </Button>{" "}
                                                    <Button className=" col-12 bg-primary">
                                                        {" "}
                                                        Login with Google{" "}
                                                    </Button>{" "}
                                                </Form>{" "}
                                            </div>{" "}
                                        </Col>{" "}
                                    </Row>{" "}
                                </TabPane>{" "}
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <div className="p-5">
                                                <Form onSubmit={this.handleRegister}>
                                                    <FormGroup>
                                                        <Label for="reg_email"> Email </Label>{" "}
                                                        <Input
                                                            value={this.state.reg_email}
                                                            onChange={this.handleChange}
                                                            type="email"
                                                            name="reg_email"
                                                            id="reg_email"
                                                            placeholder="Enter your email"
                                                        />
                                                    </FormGroup>{" "}
                                                    <Button
                                                        className=" col-12 mb-3"
                                                        onSubmit={this.handleRegister}
                                                    >
                                                        {" "}
                                                        Register{" "}
                                                    </Button>{" "}
                                                </Form>{" "}
                                            </div>{" "}
                                        </Col>{" "}
                                    </Row>{" "}
                                </TabPane>{" "}
                            </TabContent>{" "}
                        </Col>{" "}
                    </Row>{" "}
                </Container>{" "}
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { email, pswd, users } = state;
    return {
        email,
        pswd,
        users
    };
}

export default connect(mapStateToProps)(GuestHome);