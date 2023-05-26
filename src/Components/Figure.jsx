import React from 'react';

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  return (
    <svg height='500' width='400' className='figureContainer'>
      {/* Rod */}
      <line x1='120' y1='40' x2='280' y2='40' />
      <line x1='280' y1='40' x2='280' y2='100' />
      <line x1='120' y1='40' x2='120' y2='460' />
      <line x1='40' y1='460' x2='200' y2='460' />

      {/* Head */}
      {errors > 0 && <circle cx='280' cy='140' r='40' />}
      {/* Body */}
      {errors > 1 && <line x1='280' y1='180' x2='280' y2='300' />}
      {/* Arms */}
      {errors > 2 && <line x1='280' y1='260' x2='200' y2='180' />}
      {errors > 3 && <line x1='280' y1='260' x2='360' y2='180' />}
      {/* Legs */}
      {errors > 4 && <line x1='280' y1='300' x2='200' y2='360' />}
      {errors > 5 && <line x1='280' y1='300' x2='360' y2='360' />}
    </svg>
  );
};

export default Figure;
