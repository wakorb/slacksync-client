import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";

import ChannelList from "./ChannelList";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_USERS" });
    dispatch({ type: "GET_CHANNELS" });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.welcome}>Welcome to WorkOS SlackSync!</div>
      <ChannelList />
    </div>
  );
};

export default Root;
