import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDog } from '../actions';

// Component
class Dog extends React.Component {
  
  componentWillMount(){
    this.props.fetchDog();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.fetchDog}>Show Dog</button><br></br>
        <img src={this.props.url} alt="" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    url: state.Dogreducer.url,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchDog, }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Dog);

