import React, { useState } from 'react';
import QuoteContainer from './components/QuoteContainer';
import { quotes } from './data/quotes';

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      let newQuote;
      do {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      } while (newQuote.text === currentQuote.text && quotes.length > 1);
      setCurrentQuote(newQuote);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 
                    flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <QuoteContainer 
          quote={currentQuote}
          onNewQuote={getRandomQuote}
          isAnimating={isAnimating}
        />
        <div className="text-center mt-6 text-white">
          <p className="text-sm opacity-90">Click "New Quote" to get inspired!</p>
          <p className="text-sm opacity-90">Powered by Darshana Jayalath</p>
        </div>
      </div>
    </div>
  );
}

export default App;