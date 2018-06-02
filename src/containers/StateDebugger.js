import { connect } from 'react-redux';
import StateDebugger from '../components/StateDebugger';

const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateDebugger)
