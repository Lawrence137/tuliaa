
import React from 'react';

const ChatBubble = ({ message, sender, timestamp }) => {
  const isUser = sender === 'user';

  // Base classes for the bubble
  const bubbleBaseClasses = "p-4 rounded-2xl max-w-lg relative mb-2 transition-all duration-300 ease-in-out transform";

  // Classes specific to user or AI
  const bubbleSenderClasses = isUser
    ? "bg-blue-600 text-white self-end rounded-br-lg"
    : "bg-white text-gray-800 self-start rounded-bl-lg shadow-md";

  // Classes for the wrapper to align the bubble
  const wrapperClasses = `flex w-full ${isUser ? 'justify-end' : 'justify-start'}`;

  return (
    <div className={wrapperClasses}>
      <div className={`${bubbleBaseClasses} ${bubbleSenderClasses}`}>
        <p className="text-sm">{message}</p>
        {timestamp && (
          <span className={`text-xs mt-2 block ${isUser ? 'text-blue-200' : 'text-gray-400'} text-right`}>
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
