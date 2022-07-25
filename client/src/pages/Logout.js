import React from "react";
import { useSelector } from "react-redux";

const Logout = () => {
  const user = useSelector((state) => state.user.currentUser);

  const logout = () => {
    console.log("logout");
  };
  return (
    <div className="logout">
      <button type="submit" className="submit-btn" onClick={() => logout()}>
        logout
      </button>
    </div>
  );
};

export default Logout;
