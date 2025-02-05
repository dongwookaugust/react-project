import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile">
      <div className="profile-circle " />
      <div className="profile-info">
        <h5 className="profile-name">Dominic Keller</h5>
        <h6 className="profile-title">Founder</h6>
      </div>
    </div>
  );
};

export default UserProfile;
