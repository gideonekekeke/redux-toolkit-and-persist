import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "samuel",
      email: "samuel@gmail.com",
    },
    {
      id: 2,
      name: "chisom",
      email: "chisom@gmail.com",
    },
  ],
  friendsCart: [],
  friendDetail: null,
};

const SocialState = createSlice({
  name: "SocialState",
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
      state.users = payload;
    },

    addNewUser: (state, { payload }) => {
      const selectedFriend = state.friendsCart.findIndex(
        (items) => items.id === payload.id
      );

      if (selectedFriend >= 0) {
        state.friendsCart[selectedFriend].qty += 1;
      } else {
        const totalFriend = { ...payload, qty: 1 };
        state.friendsCart.push(totalFriend);
      }
    },

    DetailFrnd: (state, { payload }) => {
      state.friendDetail = payload;
    },

    remove: (state, { payload }) => {
      const removeItem = state.friendsCart.filter(
        (item) => item.id !== payload.id
      );
      state.friendsCart = removeItem;
    },
  },
});

export const { getUsers, addNewUser, DetailFrnd, remove } = SocialState.actions;
export default SocialState.reducer;
