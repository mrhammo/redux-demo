import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ShowModalButton from './containers/ShowModalButton';
import Modal from './ui/modal/containers/Modal';
import modal from './ui/modal/reducers';
import StateDebugger from './containers/StateDebugger';

const store = createStore(combineReducers({
    modal
}));

const App = () => {
    return (
        <Provider store={ store }>
            <div className="container-fluid">
                <h1>Hello World</h1>
                <ShowModalButton />
                <Modal>
                    <div className="modal-header">
                        <h3 className="modal-heading">Heading Goes Here</h3>
                    </div>
                </Modal>
                <StateDebugger />
            </div>
        </Provider>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
