import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
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
      age: '',
      height: ''
    }
  };
  
  componentDidMount(){
    this.props.getSmurfs();
  };

  handleChanges = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf, 
        [e.target.name]: e.target.value
      }
    });
  }
  
  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf)
  };
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='smurfs-container'>
          {this.props.smurfs.map(smurf => 
            <h3 className='individual-smurf' key = {smurf.id}>{smurf.name}</h3> )}
        </div>

        <div className='form-container'>
            <form onSubmit= {this.addSmurf}>
            <input 
            type= 'text'
            name= 'name'
            value = {this.state.newSmurf.name}
            placeholder = 'name'
            onChange = {this.handleChanges}
            />
            <input 
            type= 'text'
            name= 'age'
            value = {this.state.newSmurf.age}
            placeholder= 'age'
            onChange = {this.handleChanges}
            />
            <input 
            type= 'text'
            name= 'height'
            value = {this.state.newSmurf.height}
            placeholder = 'height'
            onChange = {this.handleChanges}
            />
            <button type ='submit'>Add New Smurf</button>
            </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
  smurfs: state.smurfs,
  error: state.error,
})

export default connect(mapStateToProps, {getSmurfs, addSmurf} )(App);
