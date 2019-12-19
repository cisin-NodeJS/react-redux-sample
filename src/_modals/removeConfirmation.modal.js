import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { removeProduct } from '../_actions/product.action';
import { COMMON } from '../_constants/common.constant';

class RemoveConfirmation extends React.Component {

    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
        this.success = this.success.bind(this);
    }

    close() {
        this.props.dispatch({
            type: COMMON.SET,
            attr: 'isRemoveConfirmationModalOpen',
            isRemoveConfirmationModalOpen: false
        })
    }

    success() {
        this.props.dispatch(removeProduct(this.props.item)).then(d => {
            this.close();
        });
    }

    render() {
        return (
            <div>
                <Modal size="lg" isOpen={this.props.modal.isRemoveConfirmationModalOpen} className={this.props.className}>
                    <ModalHeader>Confirm Remove :</ModalHeader>
                    <ModalBody>
                        <div className="warning">
                            Are you sure you want to remove <b>{this.props.item.productName}</b> permanently?
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.success}>Remove</Button>{' '}
                        <Button color="secondary" onClick={this.close}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

function mapStateToProps(props) {
    const { modal } = props;
    return { modal }
}

export default connect(mapStateToProps)(RemoveConfirmation);