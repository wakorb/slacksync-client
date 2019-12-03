const defaultState = {
  users: {
    byId: {},
    allIds: []
  }
};

const users = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case "GET_USERS_SUCCEEDED": {
      const newById = {};
      const newAllIds = [...state.users.allIds];

      Object.assign(newById, state.users.byId);

      const users = action.response;

      users.forEach(user => {
        if (!(user.id in newById)) {
          newAllIds.push(user.id);
        }
        newById[user.id] = user;
      });

      newState = {
        users: {
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

export default users;
