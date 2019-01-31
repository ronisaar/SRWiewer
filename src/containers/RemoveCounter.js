// RemoveCounter.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCounterRequest } from '../actions';
import { bindActionCreators } from 'redux';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';

class RemoveCounter extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="field is-grouped">
            <div className="control">
              <Fab className="button is-primary"
                onClick={(e) => { e.preventDefault(); this.props.dispatch(removeCounterRequest(2)) }}>
                <RemoveIcon/>
                  </Fab>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(removeCounterRequest, dispatch) }
}

export default connect(mapDispatchToProps)(RemoveCounter);