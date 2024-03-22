import { memo } from 'react';

const Vector1Icon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1526 790' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1024 172C706 62 466 124 312 282C195.954 401.06 68.4328 419.449 10 413.383V790H1526V0C1292.4 187.2 1094 192.667 1024 172Z'
      fill='#0A5783'
    />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
