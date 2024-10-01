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
      {jobBoards.map((board) => (
        <p key={board}>
          <a href={getLink(board, term, timeframe)} target="_blank" rel="noopener noreferrer">
            {board}
          </a>
        </p>
      ))}
    </div>
  );
}

export default JobBoards;