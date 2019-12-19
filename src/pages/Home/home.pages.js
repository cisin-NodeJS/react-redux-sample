import React from 'react';
import './home.pages.css';
import { Row, Col, Button, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getAllProduct } from '../../_actions/product.action';
import AddProduct from '../../_modals/addEditProduct.modal';
import RemoveConfirmationModal from '../../_modals/removeConfirmation.modal';
import { COMMON } from '../../_constants/common.constant';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemToRemove: null,
            selectedItem: null
        };

        // dispatch(getAllProduct())
        this.openAddProductModal = this.openAddProductModal.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onUpdate(item) {
        this.props.dispatch({
            type: COMMON.OPEN_EDIT_MODAL,
            modalIsOpen: true,
            currentEditData: item
        });
    }

    onRemove(item) {
        this.props.dispatch({
            type: COMMON.SET,
            attr: 'isRemoveConfirmationModalOpen',
            isRemoveConfirmationModalOpen: true
        });

        this.setState({
            selectedItem: item
        })
    }

    componentDidMount() {
        this.props.dispatch(getAllProduct());
    }

    openAddProductModal() {
        this.props.dispatch({
            type: COMMON.OPEN_EDIT_MODAL,
            modalIsOpen: true,
            currentEditData: null
        })
    }

    render() {
        return (
            <div>
                <Row className="mt-5">
                    <Col md="12">
                        <Button className="float-right" outline onClick={this.openAddProductModal} color="primary">Create Product</Button>
                    </Col>
                </Row>
                <Table className="mt-5">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.data.map((p, idx) => {
                            return <tr key={idx}>
                                <td>{p.id}</td>
                                <td>{p.productName}</td>
                                <td>{p.productPrice}</td>
                                <td>
                                    <i onClick={(e) => this.onUpdate(p)} className="fa fa-pencil-square-o fa-2x mr-3" aria-hidden="true"></i>
                                    <i onClick={(e) => this.onRemove(p)} className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
                <AddProduct />
                {this.state.selectedItem
                    ? <RemoveConfirmationModal item={this.state.selectedItem} />
                    : ''
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { products } = state;
    return {
        products
    };
}

export default connect(mapStateToProps)(Home);