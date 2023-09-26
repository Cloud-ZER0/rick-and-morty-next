"use client";

import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favrList: [],
    size: 0,
  },

  reducers: {
    toggleFavrotie(state, { payload }) {
      console.log("toggled", payload);
      if (state.size !== 0) {
        const flag = state.favrList.some((el) => el.id === payload.id);
        console.log("1");
        if (!flag) {
          console.log("2");
          state.favrList.push(payload);
          ++state.size;
        } else {
          console.log("3");
          state.favrList = state.favrList.filter((el) => el.id !== payload.id);
          --state.size;
        }
      } else {
        console.log("4");
        state.favrList.push(payload);
        ++state.size;
      }
    },
  },
});

export const { toggleFavrotie } = favoriteSlice.actions;
export default favoriteSlice.reducer;
