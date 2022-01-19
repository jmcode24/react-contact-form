import "./App.css";
import React, { useState } from "react";
import ContactsForm from "./components/ContactsForm";
import Contacts from "./components/Contacts";

const App = () => {
  const [details, updateDetails] = useState([
    
  ]);

  const addDetails = (newDetails) => {
    updateDetails([...details, newDetails]);
  };

  return (
    <>
      <ContactsForm addDetails={addDetails} />
      <Contacts details={details} />
    </>
  );
};

export default App;