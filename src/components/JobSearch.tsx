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
      <div className="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg shadow-md">
        <div className="relative flex-grow">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            id="job-keyword"
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for jobs..."
            required
          />
          <label htmlFor="job-keyword" className="sr-only">
            Job Keyword
          </label>
        </div>
        <div className="relative">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            id="timeframe"
            className="appearance-none bg-gray-100 text-gray-700 py-2 px-4 pr-8 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(timeframes).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
          <label htmlFor="timeframe" className="sr-only">
            Time frame
          </label>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
        <button type="submit" className="bg-[#6c43ff] text-white px-6 py-2 rounded-lg hover:bg-[#5a36d9] focus:outline-none focus:ring-2 focus:ring-[#6c43ff] focus:ring-opacity-50">
          Search
        </button>
      </div>
    </form>
  );
}

export default JobSearch;