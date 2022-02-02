import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const ContactsForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // let newDetails = {
    //   name: name,
    //   phone: phone,
    //   location: location,

    //new user object with unique id, name and email
    let newDetails = {
      id: uuid(),
      name: name,
      phone: phone,
      location: location,
      
    };

    props.addDetails(newDetails);

    setName("");
    setPhone("");
    setLocation("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-4 p-1 mb-4">
            <h2 className="text-center text-danger mb-4">Fill Form & Print Out Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Full Name" className="form-control" value={name} onChange={handleNameChange} />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Phone Number" className="mt-2 form-control" value={phone} onChange={handlePhoneChange} />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Current Location" className="mt-2 form-control" value={location} onChange={handleLocationChange} />
              </div>
              <input type="submit" value="Submit" className="mt-3 btn btn-outline-danger w-100" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsForm;