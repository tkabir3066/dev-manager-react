import React, { useContext, useState } from "react";
import Contacts from "./pages/Contacts";
import Header from "./components/layouts/Header";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import ContactDetails from "./pages/ContactDetails";
import { ContactContext } from "./context/Contact.Context";

const initialContacts = [
  {
    id: "1",
    firstName: "Barbette",
    lastName: "PfertNer",
    email: "bpfertner0@drupal.org",
    profession: "Web Developer",
    gender: "female",
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
    gender: "male",
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
    gender: "male",
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
    gender: "female",
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
    gender: "female",
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
    gender: "female",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    dateOfBirth: "17/08/1996",
    bio: "all about me",
  },
];

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <BrowserRouter>
        <Header />

        <Container
          style={{ width: "800px", margin: "0 auto" }}
          className="pt-5"
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/contacts/:id" element={<ContactDetails />} />
            <Route path="/edit-contact/:id" element={<EditContact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
