import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/contactsAct';

const ORIGINAL_STATE = JSON.parse(localStorage.getItem('contacts')) || 
[
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const onAddContact = (state, action) => {
  const newContact = [...state, action.payload];
  localStorage.setItem('contacts', JSON.stringify(newContact));
  return newContact;
};

const removeContact = (state, action) => {
  const updatedContacts = state.filter(
    task => task.id !== action.payload,
  );
  localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  return updatedContacts;
};

const contactsReducer = createReducer(ORIGINAL_STATE, {
  [actions.onAddContact]: onAddContact,
  [actions.removeContact]: removeContact,
});

export default contactsReducer;