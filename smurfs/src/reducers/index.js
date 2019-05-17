/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from '../actions';


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS_START: 
    return {
      ...state,
      fetchingSmurfs: true,
      error: ''
    };

    case FETCH_SMURFS_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    };
    default:
      return state;

  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default reducer;
