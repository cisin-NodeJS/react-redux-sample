import React from 'react';
import './collapse.component.css';

export default class Collapse extends React.Component {
    static props = {
        isOpen: false,
        vertical: true,
        elementMaxLength: 100,

        onOpen: (e) => {
            console.log('e: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', e);
        },
        onClose: (e) => {
            console.log('e: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', e);
        },
    }

    static defaultProps = {
        vertical: true,
        elementMaxLength: '300px',
        onOpen: () => console.log('Opened'),
        onClose: () => console.log('Closed'),
    }

    constructor(props) {
        super(props);

        this.state = {
            cssTarget: '_collapseH'
        }
    }

    componentDidMount() {
        if (this.props.vertical)
            this.setState({ cssTarget: '_collapseV' })

        if (this.props.isOpen)
            this.collapse();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isOpen !== this.props.isOpen)
            this.collapse();
    }

    collapse() {
        var content = this.refs.collapseDiv;
        if (content)
            if (this.decide(content))
                this.close(content)
            else
                this.open(content)
    }

    decide(content) {
        if (this.props.vertical)
            return content.style.maxHeight;

        return content.style.maxWidth;
    }

    open(content) {
        this.assign(content, this.props.elementMaxLength);
        this.props.onOpen();
    }

    close(content) {
        this.assign(content, null)
        this.props.onClose();
    }

    assign(content, value) {
        if (this.props.vertical)
            content.style.maxHeight = value;
        else
            content.style.maxWidth = value;
    }

    render() {
        return (
            <div ref='collapseDiv' target={this.state.cssTarget}>
                {this.props.children}
            </div>
        );
    }
}