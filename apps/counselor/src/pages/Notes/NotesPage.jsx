import React, { useState, useEffect } from 'react';
import CounselorLayout from '../../layouts/CounselorLayout';

// --- Self-Contained UI Components ---

const Button = ({ onClick, children, variant = 'primary' }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };
  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    />
  );
};

const Textarea = ({ value, onChange, placeholder, rows = 6 }) => {
    return (
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      ></textarea>
    );
  };
  

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg m-4">
        {children}
      </div>
    </div>
  );
};


// --- Note Feature Components ---

const NoteCard = ({ note, onClick }) => {
    return (
      <div 
        className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
        onClick={onClick}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{note.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{note.content}</p>
      </div>
    );
  };
  

const NoteList = ({ notes, onNoteClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onClick={() => onNoteClick(note)} />
      ))}
    </div>
  );
};

const NoteView = ({ note, onClose, onEdit, onDelete }) => {
    if (!note) return null;
  
    return (
      <Modal isOpen={!!note} onClose={onClose}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{note.title}</h2>
          <p className="text-gray-700 mb-6 whitespace-pre-wrap">{note.content}</p>
          <div className="flex justify-end space-x-3">
            <Button onClick={onClose} variant="secondary">Close</Button>
            <Button onClick={onDelete} variant="danger">Delete</Button>
            <Button onClick={onEdit}>Edit</Button>
          </div>
        </div>
      </Modal>
    );
};

const NoteEditor = ({ isOpen, onClose, onSave, note }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    useEffect(() => {
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      } else {
        setTitle('');
        setContent('');
      }
    }, [note]);
  
    const handleSave = () => {
      onSave({ ...note, title, content });
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{note ? 'Edit Note' : 'Create a New Note'}</h2>
          <div className="space-y-4">
            <Input
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Write your notes here..."
              rows="8"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <Button onClick={onClose} variant="secondary">Cancel</Button>
            <Button onClick={handleSave}>Save Note</Button>
          </div>
        </div>
      </Modal>
    );
};


// --- Main Page Component ---

const NotesPage = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: 'Session with John Doe', content: 'Discussed progress on anxiety management. John is showing improvement, especially with the new breathing exercises. We will continue to monitor his sleep patterns.' },
        { id: 2, title: 'Meeting with Jane Smith', content: 'Jane is struggling with work-life balance and feelings of burnout. We explored some coping strategies, including setting boundaries and scheduling personal time. She will try to implement these this week.' },
        { id: 3, title: 'Follow-up with Alex', content: 'Alex is feeling much better after starting the new medication. Reports fewer side effects and a significant mood improvement. Next session will be in two weeks.' },
      ]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
  
    const handleNoteClick = (note) => {
      setSelectedNote(note);
    };
  
    const handleCloseNoteView = () => {
      setSelectedNote(null);
    };
  
    const handleOpenEditor = (note = null) => {
      setEditingNote(note);
      setIsEditorOpen(true);
      setSelectedNote(null); // Close the view modal if it was open
    };
  
    const handleCloseEditor = () => {
      setEditingNote(null);
      setIsEditorOpen(false);
    };
  
    const handleSaveNote = (noteToSave) => {
      if (noteToSave.id) {
        setNotes(notes.map(n => n.id === noteToSave.id ? noteToSave : n));
      } else {
        setNotes([{ ...noteToSave, id: Date.now() }, ...notes]);
      }
      handleCloseEditor();
    };
  
    const handleDeleteNote = () => {
      if (selectedNote) {
        setNotes(notes.filter(n => n.id !== selectedNote.id));
        setSelectedNote(null);
      }
    };
  
    return (
        <CounselorLayout 
            pageTitle="Notes"
            pageSubTitle="Create, view, and manage your session notes."
        >
            <div className="flex justify-end items-center mb-8 -mt-8">
                <Button onClick={() => handleOpenEditor()}>Create New Note</Button>
            </div>
            
            <NoteList notes={notes} onNoteClick={handleNoteClick} />
            
            {selectedNote && (
            <NoteView 
                note={selectedNote} 
                onClose={handleCloseNoteView}
                onEdit={() => handleOpenEditor(selectedNote)}
                onDelete={handleDeleteNote}
            />
            )}
            
            <NoteEditor 
            isOpen={isEditorOpen}
            onClose={handleCloseEditor}
            onSave={handleSaveNote}
            note={editingNote}
            />
      </CounselorLayout>
    );
};
  
export default NotesPage;