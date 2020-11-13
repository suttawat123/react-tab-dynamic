import { createStore,  } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from "redux-devtools-extension";
import createFilter from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

import rootReducer from "./rootReducer";

const saveSubsetFilter = createFilter(
  'inSurance',
  ['HistoryInsurance'],
);

const persistConfig = {
  key: 'history-insurancee',
  whitelist: ['inSurance'],
  storage,
  transforms: [saveSubsetFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configurationStore() {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(),
  );
  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      // This fetch the new state of the above reducers.
 
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(
        persistReducer(persistConfig, nextRootReducer)
      )
    })
  }

  return { store, persistor }
};
