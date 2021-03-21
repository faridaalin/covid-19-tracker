import React from 'react';
import formatDigits from '../../utils/formatDigits';

const DEFAULT = 'text-sm font-bold text-opacity-90';
const COLORS = {
  gray: 'text-gray-500',
  green: 'text-green-500',
  red: 'text-red-500',
  blue: 'text-blue-500',
};

const DashboardItem = ({ className, color, title, data }) => {
  className = [className, DEFAULT, COLORS[color]].join(' ');

  return (
    <section className='customDashItem m-2 p-4 flex flex-col items-baseline border-2 rounded-md border-gray-500 border-opacity-20'>
      <span className={className}>{title}</span>
      <h3 className='text-2xl font-bold text-gray-700'>{formatDigits(data)}</h3>
    </section>
  );
};

export default DashboardItem;
