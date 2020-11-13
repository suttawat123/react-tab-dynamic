import { createStore,  } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: 'inSurance',
  whitelist: ['HistoryInsurance'],
  storage,
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
