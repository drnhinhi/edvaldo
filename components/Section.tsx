
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, children, fullWidth = false }) => {
  return (
    <section className="py-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600 inline-block">
          {title}
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded"></div>
      </div>
      <div className={fullWidth ? '' : 'max-w-7xl mx-auto'}>
        {children}
      </div>
    </section>
  );
};

export default Section;
