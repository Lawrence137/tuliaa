import React from 'react';
import Modal from '../../../../../shared/components/ui/Modal';
import Button from '../../../../../shared/components/ui/Button';

const NoteView = ({ note, onClose, onEdit, onDelete }) => {
  if (!note) return null;

  return (
    <Modal isOpen={!!note} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
        <p className="text-gray-700 mb-4">{note.content}</p>
        <div className="flex justify-end space-x-2">
          <Button onClick={onEdit}>Edit</Button>
          <Button onClick={onDelete} variant="danger">Delete</Button>
          <Button onClick={onClose} variant="secondary">Close</Button>
        </div>
      </div>
    </Modal>
  );
};

export default NoteView;

