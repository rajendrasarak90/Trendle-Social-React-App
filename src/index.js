import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/index.css';
import { App } from './components';
import { AuthProvider, PostsProvider } from './providers';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </AuthProvider>
    <ToastContainer theme="colored" autoClose={2000} />
  </React.StrictMode>,
  document.getElementById('root')
);
