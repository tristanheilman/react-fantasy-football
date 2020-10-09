// reducers
import { combineReducers } from 'redux';
import userReducer from './user';
import mapLocationReducer from './map';
import searchReducer from './search';
import networkReducer from './network';
import communityReducer from './community';
import postReducer from './post';

const appReducer = combineReducers({
    user: userReducer,
    map: mapLocationReducer,
    search: searchReducer,
    network: networkReducer,
    community: communityReducer,
    post: postReducer
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
