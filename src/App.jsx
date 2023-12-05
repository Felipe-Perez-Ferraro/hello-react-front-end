import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Greeting />
        </>
      ),
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
