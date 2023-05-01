import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
//create context
export const ContactContext = createContext();

const initialContacts = [
  {
    id: "1",
    firstName: "Barbette",
    lastName: "PfertNer",
    email: "bpfertner0@drupal.org",
    profession: "Web Developer",
    gender: "female",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    dateOfBirth: new Date(),
    bio: "all about me",
  },
  {
    id: "2",
    firstName: "Brad",
    lastName: "Pitt",
    email: "bradpitt233@drupal.org",
    profession: "Software Developer",
    gender: "male",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    dateOfBirth: new Date(),
    bio: "all about me",
  },
  {
    id: "3",
    firstName: "Phil",
    lastName: "Hayden",
    email: "philhayden25@gmail.com",
    profession: "Digital Marketer",
    gender: "male",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    dateOfBirth: new Date(),
    bio: "all about me",
  },
  {
    id: "4",
    firstName: "Maria",
    lastName: "Smith",
    email: "mariasmith124@gmail.com",
    profession: "Data Analyst",
    gender: "female",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    dateOfBirth: new Date(),
    bio: "all about me",
  },
  {
    id: "5",
    firstName: "Jacob",
    lastName: "Read",
    email: "jacobread1993@drupal.org",
    profession: "Data Analyst",
    gender: "male",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
    dateOfBirth: new Date(),
    bio: "all about me",
  },
  {
    id: "6",
    firstName: "Ryan",
    lastName: "Goldsmith",
    email: "ryanhero11@drupal.org",
    profession: "Machine Learning",
    gender: "male",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
    dateOfBirth: new Date(),
    bio: "all about me",
  },
  {
    id: "7",
    firstName: "Bella",
    lastName: "Jacob",
    email: "bellajacob@drupal.org",
    profession: "Artificial Intelligence",
    gender: "female",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    dateOfBirth: new Date(),
    bio: "all about me",
  },
  {
    id: "8",
    firstName: "Jemima",
    lastName: "Philip",
    email: "jemimaphilip23@drupal.org",
    profession: "Artificial Intelligence",
    gender: "female",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    dateOfBirth: new Date(),
    bio: "all about me",
  },
];

const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const UPDATE_CONTACT = "UPDATE_CONTACT";

const contactsReducer = (state, action) => {
  const { type, payLoad } = action;
  // if (action.type === "DELETE_CONTACT") {
  //   const updatedContacts = state.filter(
  //     (contact) => contact.id !== action.payLoad
  //   );
  // }

  switch (type) {
    case DELETE_CONTACT:
      const updatedContacts = state.filter((contact) => contact.id !== payLoad);
      return updatedContacts;

    case ADD_CONTACT:
      const newContact = {
        id: uuidv4(),
        ...payLoad,
      };

      return [newContact, ...state];

    case UPDATE_CONTACT:
      const { id, contactToUpdate } = payLoad;
      const contacts = state.map((contact) => {
        if (contact.id === id) {
          return {
            id,
            ...contactToUpdate,
          };
        } else {
          return contact;
        }
      });

      return [...contacts];

    default:
      return state;
  }
};
//create provider
export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactsReducer, initialContacts);
  const deleteContact = (id) => {
    // const updatedContacts = contacts.filter((contact) => contact.id !== id);

    dispatch({ type: DELETE_CONTACT, payLoad: id });
  };

  const updateContact = (contactToUpdate, id) => {
    dispatch({ type: UPDATE_CONTACT, payLoad: { id, contactToUpdate } });
  };
  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payLoad: contact });

    // setContacts([addToContact, ...contacts]);
  };
  const value = {
    contacts,
    deleteContact,
    updateContact,
    addContact,
  };
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};
