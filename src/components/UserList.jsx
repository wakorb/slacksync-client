import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const UserList = props => {
  const userIds = useSelector(state => state.users.allIds);

  return (
    <>
      {userIds &&
        userIds.map(userId => {
          return <User userId={userId} />;
        })}
    </>
  );
};

export default UserList;
