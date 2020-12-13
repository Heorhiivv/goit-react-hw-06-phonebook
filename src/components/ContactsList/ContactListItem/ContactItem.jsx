import React from "react";
import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactItem.module.css'

import contactsAct from '../../../redux/actions/contactsAct';
import {connect} from 'react-redux';

const ContactItem = ({name, number, removeContact}) => {
 return (
  <li className={css.item}>
  <p className={css.itemText}>{name}:</p>
  <p className={css.itemText}>{number}</p>
    <button 
    type="button"
    className={css.btn} 
    onClick={removeContact}>
      Delete
    </button>
</li>
 );
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.find(item => item.id === ownProps.id);
  return {
    ...item,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(contactsAct.removeContact(ownProps.id)),
});

ContactItem.propTypes = {
  removeContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
