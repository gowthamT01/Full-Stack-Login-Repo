import React from 'react';

function UserList(props) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow text-center">
        <div className="card-body">
          <h5 className="card-title">
            {props.fname} {props.lname}
          </h5>
          <p className="card-text">
            📧 {props.email}
          </p>
          <p className="card-text">
            👤 {props.gender}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserList;
