import React from 'react';
import formatDigits from '../../utils/formatDigits';

const DEFAULT = 'text-3xl font-bold ';
const COLORS = {
  gray: 'text-gray-700',
  green: 'text-green-500',
  red: 'text-red-500',
  blue: 'text-blue-500',
};

const DashboardItem = ({ className, color, title, data, ...props }) => {
  className = [className, DEFAULT, COLORS[color]].join(' ');

  return (
    <section className='customFlexItem m-4 p-4 flex flex-col items-baseline border-2 rounded-md border-gray-500 border-opacity-20'>
      <span className='text-gray-600 text-sm font-bold text-opacity-70'>
        {title}
      </span>
      <h3 className={className}>{formatDigits(data)}</h3>
    </section>
  );
};

export default DashboardItem;
