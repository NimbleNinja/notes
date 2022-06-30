import React from 'react';
import { useDispatch } from 'react-redux';
import { addTagToFilterList, deleteNote, openEditNote } from './notes.slice';
import './note.scss';

const Note = ({ id, content, tags }) => {
  const dispatch = useDispatch();

  return (
    <li className="list__item item" key={id}>
      <div className="item__content">{content}</div>
      <div className="item__tags">
        {tags.map(tag => (
          <span
            key={tag}
            className="tag"
            onClick={e => dispatch(addTagToFilterList(tag))}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="item__actions">
        <button onClick={() => dispatch(deleteNote(id))} className="btn">
          delete
        </button>
        <button onClick={() => dispatch(openEditNote(id))} className="btn">
          edit
        </button>
      </div>
    </li>
  );
};

export default Note;
