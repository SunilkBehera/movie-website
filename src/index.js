import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';


const REACT_APP_ACCESS_TOKEN= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWZkZGI3N2YyZTMyNGQ4Y2VjMWYwN2E3NzkwYTFhZiIsIm5iZiI6MTcyMzE2OTQ0OC4zNTMzLCJzdWIiOiI2NjlmOTQxODk0MGM5Njk3ODQyZTc4YWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CK-E8e0-uZbeccqZDKbbjySANfXD1bcJ1p-i7z0zcos'

/**setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${REACT_APP_ACCESS_TOKEN}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router}/>
    </Provider>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
