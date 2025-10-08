import React, { useState } from 'react';
import Quote from './Quote';
import QuoteButton from './QuoteButton';

function QuoteContainer({ quote, onNewQuote, isAnimating }) {
  const [copied, setCopied] = useState(false);

  const copyQuote = () => {
    const text = `"${quote.text}" - ${quote.author}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const tweetQuote = () => {
    const text = `"${quote.text}" - ${quote.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 
                    transform hover:scale-105 transition-transform duration-300">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Quote Generator
        </h1>
        <p className="text-gray-500">Get inspired with random quotes</p>
      </div>

      <Quote quote={quote} isAnimating={isAnimating} />

      <div className="flex flex-wrap gap-4 justify-center">
        <QuoteButton 
          onClick={onNewQuote}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white 
                     hover:from-purple-700 hover:to-pink-700"
          icon="🔄"
          text="New Quote"
        />
        <QuoteButton 
          onClick={copyQuote}
          className="bg-gray-700 text-white hover:bg-gray-800"
          icon={copied ? "✓" : "📋"}
          text={copied ? "Copied!" : "Copy"}
        />
        <QuoteButton 
          onClick={tweetQuote}
          className="bg-blue-500 text-white hover:bg-blue-600"
          icon="🐦"
          text="Tweet"
        />
      </div>
    </div>
  );
}

export default QuoteContainer;