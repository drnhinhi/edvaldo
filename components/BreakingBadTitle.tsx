
import React from 'react';

interface Segment {
  text: string;
  number: number;
  detail: string;
}

interface BreakingBadTitleProps {
  segments: Segment[];
}

const BreakingBadTitle: React.FC<BreakingBadTitleProps> = ({ segments }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      {segments.map((segment, index) => (
        <div 
          key={index}
          className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-700/80 border-2 border-green-400 text-white rounded-md shadow-lg shadow-green-900/50"
        >
          <span className="absolute top-1 left-2 text-xs font-bold">{segment.number}</span>
          <span className="text-3xl sm:text-4xl font-black tracking-tighter">{segment.text}</span>
          <span className="absolute bottom-1 right-2 text-[10px] opacity-70">{segment.detail}</span>
        </div>
      ))}
    </div>
  );
};

export default BreakingBadTitle;
