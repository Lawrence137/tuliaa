import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({ notes, onNoteClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onClick={() => onNoteClick(note)} />
      ))}
    </div>
  );
};

export default NoteList;
