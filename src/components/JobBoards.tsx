import React from 'react';

const jobBoards = [
  'jobs.lever.co',
  'boards.greenhouse.io',
  'jobs.ashbyhq.com',
  'jobs.jobvite.com',
  'jobs.smartrecruiters.com',
  'jobs.workable.com',
  'myworkdayjobs.com',
  'careers.jobscore.com',
  'ats.comparably.com',
  'app.dover.io'
];

const googleTimeframes = {
  day: 'qdr:d',
  week: 'qdr:w',
  month: 'qdr:m',
  year: 'qdr:y',
};

function getLink(jobBoard, term, timeframe) {
  const query = new URLSearchParams({
    q: `site:${jobBoard} ${term}`,
    tbs: googleTimeframes[timeframe] || '',
  });
  return `https://www.google.com/search?${query.toString()}`;
}

function JobBoards({ term, timeframe }) {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobBoards.map((board) => (
          <li key={board} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <a
              href={getLink(board, term, timeframe)}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              {board}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobBoards;