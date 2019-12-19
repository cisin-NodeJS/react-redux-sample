import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { addProduct, updateProduct } from '../_actions/product.action';
import { COMMON } from '../_constants/common.constant';

const initialState = {
    id: 0,
    productName: '',
    productPrice: '',
    isEditModalOpen: false
}

class AddProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = initialState;
        this.close = this.close.bind(this);
        this.success = this.success.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    close() {
        this.props.dispatch({
            type: COMMON.SET,
            attr: 'modalIsOpen',
            modalIsOpen: false
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            this.props.modal.modalIsOpen &&
            (prevProps.modal.currentEditData !== this.props.modal.currentEditData)
        ) {
            this.setState({
                productName: this.props.modal.currentEditData ? this.props.modal.currentEditData.productName : '',
                productPrice: this.props.modal.currentEditData ? this.props.modal.currentEditData.productPrice : '',
                id: this.props.modal.currentEditData ? this.props.modal.currentEditData.id : 0,
            });
        }
    }

    success() {
        console.log('this: ', this);
        if (this.props.modal.currentEditData) { 
            this.props.dispatch(updateProduct(this.state)).then(d => {
                this.setState(initialState);
                this.close();
            });
        } else {
            this.props.dispatch(addProduct(this.state)).then(d => {
                this.setState(initialState);
                this.close();
            });
        }
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Modal size="lg" isOpen={this.props.modal.modalIsOpen} className={this.props.className}>
                    <ModalHeader>{this.props.modal.currentEditData ? 'Edit Product' : 'Add Product'}</ModalHeader>
                    <ModalBody>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label for="p_name">Product Name</Label>
                                    <Input type="text" id="productName" value={this.state.productName}
                                        onChange={this.handleChange}
                                        placeholder="Please enter product name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="p_price">Product Price</Label>
                                    <Input type="number" id="productPrice" value={this.state.productPrice}
                                        onChange={this.handleChange}
                                        placeholder="Please enter product price" />
                                </FormGroup>
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.success}>{this.props.modal.currentEditData ? 'Update' : 'Add'}</Button>{' '}
                        <Button color="secondary" onClick={this.close}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

function mapStateToProps(props) {
    const { modal } = props;

    return {
        modal
    }
}

export default connect(mapStateToProps)(AddProduct);