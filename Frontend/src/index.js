import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'boxicons/css/boxicons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import App from './App';
// import PostProvider from './context/PostContext2';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <PostProvider > */}
      <App />
    {/* </PostProvider> */}
  </React.StrictMode>
)

reportWebVitals()
