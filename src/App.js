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

  //editUser function which takes in an id and a user object and replaces the user object in the users state array with the new user object
  const editDetail = (id, newDetails) => {
    const editedDetails = details.map((details) => {
      if (details.id === id) {
        return newDetails;
      }
      return details;
    });

    updateDetails(editedDetails);
  };

  //deleteUser function which takes in an id and removes the user object from the users state array
  const deleteDetail = (id) => {
    const filteredDetails = details.filter((details) => {
      if (details.id !== id) 
      return details;
    });

    updateDetails(filteredDetails);
  }

  return (
    <>
      <ContactsForm addDetails={addDetails} />
      <Contacts details={details} editDetail={editDetail} deleteDetail={deleteDetail} />
    </>
  );
};

export default App;