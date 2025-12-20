import React from 'react';

const NoteCard = ({ note, onClick }) => {
  return (
    <div 
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2">{note.title}</h3>
      <p className="text-gray-700">{note.content.substring(0, 100)}...</p>
    </div>
  );
};

export default NoteCard;
