import React from 'react';

class ShowModalButton extends React.Component {
    render() {
        return (
            <button type="button" onClick={ this.props.showModal }>Show Modal</button>
        );
    }
}

export default ShowModalButton
