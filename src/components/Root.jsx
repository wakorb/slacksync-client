import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import UserList from "./UserList";
import Instance from "../utils/AxiosUtil";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  welcome: {
    margin: "100px 0px"
  }
});

const Root = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Instance.axiosInstance()
      .get("/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(`error - ${error}`);
      });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.welcome}>Welcome to WorkOS SlackSync!</div>
      <UserList users={users} />
    </div>
  );
};

export default Root;
