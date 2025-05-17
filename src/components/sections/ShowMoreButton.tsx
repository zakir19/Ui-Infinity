
import React from 'react';

interface ShowMoreButtonProps {
  showAll: boolean;
  onClick: () => void;
  className?: string;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ showAll, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-md text-white font-medium hover:opacity-90 transition-all ${className}`}
    >
      {showAll ? 'Show Less' : 'Show All'}
    </button>
  );
};

export default ShowMoreButton;
