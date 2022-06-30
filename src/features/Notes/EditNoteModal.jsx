import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './edit-note-modal.scss';
import { cancelEdit, saveEditNote } from './notes.slice';

const EditNoteModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.notes.showModal);
  const initValue = useSelector(state => state.notes.editableNote.content);

  const [value, setValue] = useState(initValue);

  if (showModal) {
    return (
      <div className="edit-modal">
        <div className="edit-modal__content">
          <h2 className="edit-modal__title">Edit</h2>
          <textarea
            defaultValue={initValue}
            value={value}
            onChange={e => setValue(e.target.value)}
            className="edit-modal__text"
            cols="30"
            rows="10"
          ></textarea>
          <div className="edit-modal__actions">
            <button onClick={() => dispatch(cancelEdit())} className="btn">
              Cancel
            </button>
            <button
              onClick={() => dispatch(saveEditNote(value))}
              className="btn"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default EditNoteModal;
