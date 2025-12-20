import React, { useState, useEffect } from 'react';
import Modal from '../../../../../shared/components/ui/Modal';
import Input from '../../../../../shared/components/ui/Input';
import Button from '../../../../../shared/components/ui/Button';

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
        <h2 className="text-2xl font-bold mb-4">{note ? 'Edit Note' : 'Create Note'}</h2>
        <div className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            className="w-full p-2 border rounded"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={onClose} variant="secondary">Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default NoteEditor;
