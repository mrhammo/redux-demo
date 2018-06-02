import React from "react";

class Modal extends React.Component {

    decorate() {
        if (true === this.props.isVisible) {
            return {
                display: "block"
            }
        }

        return {}
    }

    render() {
        return (
            <div className="modal fade show" style={ this.decorate() }>
                <div className="modal-dialog">
                    <div className="modal-content">
                        { this.props.children }
                        <div className="modal-footer">
                            <button type="button" onClick={ this.props.hideModal }>Hide Modal</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

Modal.defaultProps = {
    isVisible: false
};

export default Modal;
