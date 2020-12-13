import { createAction } from '@reduxjs/toolkit';

const onAddContact = createAction('ADD_CONTACT');
const removeContact = createAction('REMOVE_CONTACT');

export default { onAddContact, removeContact };