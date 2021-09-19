import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';
import { store } from '../../store';

const StoreProvider: React.FC = ({ children }) => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default StoreProvider;
