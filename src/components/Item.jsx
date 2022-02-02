import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

const Item = (props) => {
  //boolean state to control the modal
  const [isShowing, setIsShowing] = useState(false);

  //variables to hold the user's id, name, phone and location
  const id = props.details.id;
  const username = props.details.name;
  const userphone = props.details.phone;
  const userlocation = props.details.location;

  //user name state for editing
  const [name, setName] = useState(username);
  //user email state for editing
  const [phone, setPhone] = useState(userphone);
  // user gen state for editing
  const [location, setLocation] = useState(userlocation);

  //function to handle editing user details
  const handleEdit = () => {
    let editedDetail = {
      id: id,
      name: name,
      phone: phone,
      location: location,
      
    };

    //call the editUser function from the parent component and pass in the user's id and the new user object
    props.editDetail(id, editedDetail);
    //close the modal
    setIsShowing(false);
  };

  return (
    <div>
      <div className="text-center">
      <h5 className="text-white"><span className="text-warning">Name:</span> {username}</h5>
      <h5 className="text-white"><span className="text-secondary">Phone Number:</span> {userphone}</h5>
      <h5 className="text-white"><span className="text-success">Location:</span> {userlocation}</h5>
      </div>
      <hr className="bg-secondary"/>
      <Button className="me-3"
        onClick={() => {
          setIsShowing(true);
        }}
      >
        Edit
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          props.deleteDetail(id);
        }}
      >
        Delete
      </Button>

      <Modal
        show={isShowing}
        onHide={() => {
          setIsShowing(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-white">Edit Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input className="form-control mt-2"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input className="form-control mt-2"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setIsShowing(false);
          }}>Close</Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Item;