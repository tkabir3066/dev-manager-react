import React, { useState } from "react";
import Contacts from "./contacts/Contacts";
import Header from "./layouts/Header";
import { Container } from "react-bootstrap";

const initialContacts = [
  {
    id: "1",
    firstName: "Barbette",
    lastName: "PfertNer",
    email: "bpfertner0@drupal.org",
    profession: "Web Developer",
    gender: "Female",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    dateOfBirth: "17/05/1996",
    bio: "all about me",
  },
  {
    id: "2",
    firstName: "Brad",
    lastName: "Pitt",
    email: "bradpitt233@drupal.org",
    profession: "Software Developer",
    gender: "Male",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    dateOfBirth: "14/11/1987",
    bio: "all about me",
  },
  {
    id: "3",
    firstName: "Phil",
    lastName: "Hayden",
    email: "philhayden25@gmail.com",
    profession: "Digital Marketer",
    gender: "Male",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    dateOfBirth: "12/03/1991",
    bio: "all about me",
  },
  {
    id: "4",
    firstName: "Maria",
    lastName: "Smith",
    email: "mariasmith124@gmail.com",
    profession: "Data Analyst",
    gender: "Female",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    dateOfBirth: "08/03/1993",
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
    dateOfBirth: "11/11/1990",
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
    dateOfBirth: "07/12/1988",
    bio: "all about me",
  },
  {
    id: "7",
    firstName: "Bella",
    lastName: "Jacob",
    email: "bellajacob@drupal.org",
    profession: "Artificial Intelligence",
    gender: "Female",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    dateOfBirth: "06/12/1996",
    bio: "all about me",
  },
  {
    id: "8",
    firstName: "Jemima",
    lastName: "Philip",
    email: "jemimaphilip23@drupal.org",
    profession: "Artificial Intelligence",
    gender: "Female",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    dateOfBirth: "17/08/1996",
    bio: "all about me",
  },
];
function App() {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <>
      <Header />
      <Container style={{ width: "800px", margin: "0 auto" }} className="pt-5">
        <Contacts contacts={contacts} />
      </Container>
    </>
  );
}

export default App;
