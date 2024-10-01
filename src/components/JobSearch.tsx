import React from 'react';

const timeframes = {
  day: 'Day',
  week: 'Week',
  month: 'Month',
  year: 'Year',
};

function JobSearch({ term, setTerm, timeframe, setTimeframe }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add any additional logic here if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Find a job about
        <label htmlFor="job-keyword" className="screen-reader-text">
          Job Keyword
        </label>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          id="job-keyword"
          className="text-input"
          placeholder="keyword"
          required
        />
        posted within the past
        <label htmlFor="timeframe" className="screen-reader-text">
          Time frame
        </label>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          id="timeframe"
          className="select-input"
        >
          {Object.entries(timeframes).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <button type="submit" className="submit-button">
          Go
        </button>
      </p>
    </form>
  );
}

export default JobSearch;