import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';

import FileListy from './ui/containers';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <FileListy />
    </Provider>
  );
}

export default App;
