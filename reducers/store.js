import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-community/async-storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user', 'community', 'map', 'post', 'network', 'search']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware()))
  let persistor = persistStore(store)
  return { store, persistor }
}
