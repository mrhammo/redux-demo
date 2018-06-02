import React from 'react';

class StateDebugger extends React.Component {
    render() {
        return (
            <pre className="pre-scrollable mt-2 p-3" style={{ width: "100%", height: "300px", margin: 0, position: "fixed", left: 0, bottom: 0, backgroundColor: "#ddd" }}>
                { JSON.stringify(this.props.state) }
            </pre>
        );
    }
}

StateDebugger.defaultProps = {
    state: {}
}

export default StateDebugger
