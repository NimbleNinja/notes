import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditNoteModal from './features/Notes/EditNoteModal';
import Note from './features/Notes/Note';
import { createNote, addTagToFilterList } from './features/Notes/notes.slice';
import './styles/app.scss';

const App = () => {
  const dispatch = useDispatch();

  const notes = useSelector(state => state.notes.list);
  const filterTags = useSelector(state => state.notes.filterTags);
  const [value, setValue] = useState('');

  const createBtnHandler = () => {
    dispatch(createNote(value));
    setValue('');
  };

  const notesToRender =
    filterTags.length === 0
      ? notes
      : notes.filter(note => note.tags.some(tag => filterTags.includes(tag)));

  return (
    <div className="app">
      <EditNoteModal />
      <div className="notes">
        <h1 className="notes__title">Notes</h1>
        <div className="notes__create">
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            className="notes__create-input"
            type="text"
          />
          <button onClick={createBtnHandler} className="notes__create-btn btn">
            create
          </button>
        </div>
        <div className="notes__allTags">
          {filterTags.length !== 0 ? (
            <button
              onClick={() => dispatch(addTagToFilterList(null))}
              className="btn"
            >
              clear
            </button>
          ) : null}
          {filterTags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <ul className="notes__list list">
          {notesToRender.map(({ id, content, tags }) => (
            <Note key={id} id={id} content={content} tags={tags} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
