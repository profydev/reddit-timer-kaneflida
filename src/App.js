import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import MarketingPage from './Pages/MarketingPage';

function App() {
  return (
    <div className={styles.AppContainer}>
      App Placeholder
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/search" element={<MarketingPage />} />
      </Routes>
    </div>
  );
}

export default App;
