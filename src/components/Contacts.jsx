import React from "react";

const Contacts = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-info">Details Submitted </h1>
            {props.details.map((details, index) => {
              return (
                <div key={index}>
                  <div class="card mt-1 mb-1 text-center bg-primary">
                    <div class="card-body">
                      <h5 className="text-white"><span className="text-secondary">Name:</span> {details.name}</h5>
                      <h5 className="text-white"><span className="text-warning">Phone Number:</span> {details.phone}</h5>
                      <h5 className="text-white"><span className="text-success">Location:</span> {details.location}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;