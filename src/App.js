import React, { Component } from 'react';
import Counter from '../src/containers/Counter';
import AddCounter from '../src/containers/AddCounter';
import RemoveCounter from '../src/containers/RemoveCounter';
import DenseAppBar from '../src/componnents/DenseAppBar'
import '../src/style/App.css';
import Dog from './componnents/Dog';
// import DogVIew from './componnents/DogVIew';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DenseAppBar/>
        <div className="container">
          <Counter></Counter><br />
          <div className="columns">
            <div className="column is-11">
              <AddCounter></AddCounter>
            </div>
            <div className="column auto">
              <RemoveCounter></RemoveCounter>
            </div>
            <Dog/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
