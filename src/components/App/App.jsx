import React from 'react';
import Title from '../../shared/Title/Title';
import ContactForm from "../ContactForm/ContactForm"
import Filter from "../Filter/Filter"
import ContactsList from "../ContactsList/ContactsList"
import "./App.css";

// import {CSSTransition} from 'react-transition-group';

const App = () => {
  return (
    <>
          {/* <CSSTransition in={true} appear={true} timeout={500} classNames="Logo-slideIn" unmountOnExit>
          <h1 className="title">Phonebook</h1>
        </CSSTransition> */}
      <Title />
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default App;