import React from 'react';

function QuoteButton({ onClick, className, icon, text }) {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold 
                  transition-all duration-200 transform hover:scale-105 
                  shadow-lg hover:shadow-xl ${className}`}
    >
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </button>
  );
}

export default QuoteButton;