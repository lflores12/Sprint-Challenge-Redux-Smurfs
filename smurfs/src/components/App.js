import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


class App extends Component {

  state = {
    newSmurf: {
      name: '',
      age: 
    }
  }
  
  componentDidMount(){
    this.props.getSmurfs();
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='smurfs-container'>
          {this.props.smurfs.map(smurf => 
            <h3 className='individual-smurf' key = {smurf.id}>{smurf.name}</h3> )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getSmurfs: state.getSmurfs,
  smurfs: state.smurfs,
  error: state.error
})

export default connect(mapStateToProps, {getSmurfs} )(App);
