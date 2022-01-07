import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MarketingPage from './Pages/MarketingPage';
import SearchPage from './Pages/SearchPage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.AppContainer}>
      App Placeholder
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
