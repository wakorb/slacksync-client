import React from "react";
import PropTypes from "prop-types";
import User from "./User";

const UserList = props => {
  const { users } = props;

  return (
    <>
      {users &&
        users.map(user => {
          return <User user={user} />;
        })}
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.instanceOf(Array)
};

UserList.defaultProps = {
  users: []
};

export default UserList;
