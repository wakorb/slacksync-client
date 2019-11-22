import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import Instance from "../utils/AxiosUtil";

const Root = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Instance.axiosInstance()
      .get(`${process.env.SLACKSYNC_URI}/users`)
      .then(response => {
        console.log(response);
        setUsers(response);
      })
      .catch(error => {
        console.log(`error - ${error}`);
      });
  }, []);

  return <UserList users={users} />;
};

export default Root;
