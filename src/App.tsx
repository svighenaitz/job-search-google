import React, { useState } from 'react';
import JobSearch from './components/JobSearch';
import JobBoards from './components/JobBoards';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [term, setTerm] = useState('front end -angular');
  const [timeframe, setTimeframe] = useState('day');

  return (
    <div className="App">
      <JobSearch
        term={term}
        setTerm={setTerm}
        timeframe={timeframe}
        setTimeframe={setTimeframe}
      />
      <JobBoards term={term} timeframe={timeframe} />
      <Footer />
    </div>
  );
}

export default App;