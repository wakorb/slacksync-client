const defaultState = {
  channels: {
    byId: {},
    allIds: []
  }
};

const channels = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case "GET_CHANNELS_SUCCEEDED": {
      const newById = {};
      const newAllIds = [...state.channels.allIds];

      Object.assign(newById, state.channels.byId);

      const channels = action.response;

      channels.forEach(channel => {
        if (!(channel.id in newById)) {
          newAllIds.push(channel.id);
        }
        newById[channel.id] = {
          id: channel.id,
          users: Object.keys(channel.users)
        };
      });

      newState = {
        channels: {
          byId: newById,
          allIds: newAllIds
        }
      };
      return newState;
    }
    default:
      return state;
  }
};

export default channels;
