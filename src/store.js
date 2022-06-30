import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './features/Notes/notes.slice';

export default configureStore({
  reducer: {
    notes: notesReducer,
  },
});
