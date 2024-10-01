import React, { useState } from 'react';
import JobSearch from './components/JobSearch';
import JobBoards from './components/JobBoards';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [term, setTerm] = useState('front end -angular');
  const [timeframe, setTimeframe] = useState('day');

  return (
    <div className="App flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Job Board Search Engine</h1>
      <h2 className="text-xl mb-8 text-center text-gray-600">Find your next opportunity across multiple job boards</h2>
      <JobSearch
        term={term}
        setTerm={setTerm}
        timeframe={timeframe}
        setTimeframe={setTimeframe}
      />
      <div className="my-8">
        <p className="text-center text-gray-700 mb-4">Click on one of the following job boards to continue your search:</p>
      </div>
      <JobBoards term={term} timeframe={timeframe} />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;