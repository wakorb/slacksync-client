import React from "react";
import PropTypes from "prop-types";
import User from "./User";

const UserList = props => {
  const { userIds } = props;

  return (
    <>
      {userIds &&
        userIds.map(userId => {
          return <User userId={userId} />;
        })}
    </>
  );
};

UserList.propTypes = {
  userIds: PropTypes.instanceOf(Array)
};

UserList.defaultProps = {
  userIds: []
};

export default UserList;
