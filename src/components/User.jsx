import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: 300,
    margin: "10px 0px",
    border: "1px solid black"
  },
  userName: {
    lineHeight: "48px",
    marginLeft: 10
  }
});

const User = props => {
  const { userId } = props;

  const classes = useStyles();
  const user = useSelector(state => state.users.byId[userId]);

  let render = null;

  if (user) {
    render = (
      <div className={classes.root}>
        <img src={user.profile.image_48} />
        <div className={classes.userName}>{user.name}</div>
        <div className={classes.userName}>{user.profile.status_text}</div>
      </div>
    );
  }

  return render;
};

User.propTypes = {
  userId: PropTypes.string.isRequired
};

export default User;

// const userSchema = {
//     id: { type: String, unique: true },
//     team_id: String,
//     name: String,
//     deleted: Boolean,
//     color: String,
//     real_name: String,
//     tz: String,
//     tz_label: String,
//     tz_offset: Number,
//     profile: {
//       avatar_hash: String,
//       status_text: String,
//       status_emoji: String,
//       status_expiration: Date,
//       real_name: String,
//       display_name: String,
//       real_name_normalized: String,
//       display_name_normalized: String,
//       email: String,
//       image_original: String,
//       image_24: String,
//       image_32: String,
//       image_48: String,
//       image_72: String,
//       image_192: String,
//       image_512: String,
//       team: String,
//     },
//     is_admin: Boolean,
//     is_owner: Boolean,
//     is_primary_owner: Boolean,
//     is_restricted: Boolean,
//     is_ultra_restricted: Boolean,
//     is_bot: Boolean,
//     is_stranger: Boolean,
//     updated: Date,
//     is_app_user: Boolean,
//     has_2fa: Boolean,
//     locale: String,
//   };
