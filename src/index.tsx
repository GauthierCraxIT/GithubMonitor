import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HomePage } from './Pages/HomePage';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyDz2Grv7AtqnyT4BMiom0JMLCDBId2_uh8",
  authDomain: "github-monitor-25054.firebaseapp.com",
  projectId: "github-monitor-25054",
  storageBucket: "github-monitor-25054.appspot.com",
  messagingSenderId: "872127967861",
  appId: "1:872127967861:web:3a7ec548d583b3f14c7e3c"
};

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

const app = initializeApp(firebaseConfig);
