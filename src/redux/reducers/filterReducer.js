import { createReducer } from '@reduxjs/toolkit';
import filterContacts from '../actions/filterAct';

const filterReducer = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
});

export default filterReducer;