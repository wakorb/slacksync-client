import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

import UserList from "./UserList";

const useStyles = makeStyles({
  root: {
    margin: "10px 0px",
    padding: 10,
    border: "1px solid black"
  },
  userName: {
    lineHeight: "48px",
    marginLeft: 10
  }
});

const Channel = props => {
  const { channelId } = props;

  const classes = useStyles();
  const channel = useSelector(state => state.channels.channels.byId[channelId]);

  let render = null;

  if (channel) {
    render = (
      <div className={classes.root}>
        <div>{channel.id}</div>
        <UserList userIds={channel.users} />
      </div>
    );
  }

  return render;
};

Channel.propTypes = {
  channelId: PropTypes.string.isRequired
};

export default Channel;
