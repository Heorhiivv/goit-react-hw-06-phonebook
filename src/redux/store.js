import { configureStore } from '@reduxjs/toolkit';
import contacts from './reducers/contactsReducer';
import filter from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
});

export default store;