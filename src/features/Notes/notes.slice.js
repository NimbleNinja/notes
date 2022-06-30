import { createSlice } from '@reduxjs/toolkit';
import { getTagsFromString } from '../../tools/getTagsFromString';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    showModal: false,
    list: [],
    filterTags: [],
    editableNote: '',
  },
  reducers: {
    createNote: (state, action) => {
      if (!action.payload) {
        return;
      }

      state.list.push({
        id: state.list.length + 1,
        content: action.payload,
        tags: getTagsFromString(action.payload),
      });
    },
    deleteNote: (state, action) => {
      state.list = state.list.filter(note => note.id !== action.payload);
    },
    openEditNote: (state, action) => {
      state.editableNote = state.list.find(note => note.id === action.payload);
      state.showModal = true;
    },
    cancelEdit: state => {
      state.showModal = false;
    },
    saveEditNote: (state, action) => {
      const content = action.payload;
      const currentNoteIndex = state.list.findIndex(
        note => note.id === state.editableNote.id
      );

      state.list[currentNoteIndex] = {
        ...state.list[currentNoteIndex],
        content,
        tags: getTagsFromString(content),
      };

      state.showModal = false;
    },
    addTagToFilterList: (state, action) => {
      const tag = action.payload;

      if (!tag) {
        state.filterTags = [];
        return;
      }

      if (!state.filterTags.includes(tag)) {
        state.filterTags.push(tag);
      }
    },
  },
});

export const {
  createNote,
  deleteNote,
  openEditNote,
  cancelEdit,
  addTagToFilterList,
  saveEditNote,
} = notesSlice.actions;
export default notesSlice.reducer;
