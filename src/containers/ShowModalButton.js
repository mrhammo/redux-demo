import { connect } from 'react-redux';
import { showModal } from '../ui/modal/actions';
import ShowModalButton from '../components/ShowModalButton';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    showModal: () => dispatch(showModal)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowModalButton)
