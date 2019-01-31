// AddCounter.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounterRequest } from '../actions';
import { bindActionCreators } from 'redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class AddCounter extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="field is-grouped">
            <div className="control">
              <Fab color="primary" aria-label="Add"  onClick={(e) => { e.preventDefault(); this.props.dispatch(addCounterRequest(2)) }}>
                <AddIcon />
              </Fab>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCounterRequest, dispatch) }
}
export default connect(mapDispatchToProps)(AddCounter);