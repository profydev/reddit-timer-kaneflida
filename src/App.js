import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketingPage from './Pages/MarketingPage';
import SearchPage from './Pages/SearchPage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.AppContainer}>
      <h1>App Placeholder</h1>
      <Router>
        <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
