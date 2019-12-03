import React from "react";
import { useSelector } from "react-redux";
import Channel from "./Channel";

const ChannelList = props => {
  const channelIds = useSelector(state => {
    return state.channels.channels.allIds;
  });

  return (
    <>
      {channelIds &&
        channelIds.map(channelId => {
          return <Channel channelId={channelId} />;
        })}
    </>
  );
};

export default ChannelList;
