import { connect } from 'react-redux';
import { hideModal } from '../actions';
import Modal from '../components/Modal';

const mapStateToProps = state => ({
  isVisible: state.modal.isVisible
})

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
