import React from 'react';

function Quote({ quote, isAnimating }) {
  return (
    <div className={`bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl 
                     p-8 mb-8 min-h-[200px] flex flex-col justify-center
                     transition-opacity duration-300 ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      <div className="text-5xl text-purple-500 mb-4">❝</div>
      <p className="text-2xl md:text-3xl text-gray-800 font-serif leading-relaxed mb-4 italic">
        {quote.text}
      </p>
      <p className="text-xl text-purple-600 font-semibold text-right">
        — {quote.author}
      </p>
    </div>
  );
}

export default Quote;