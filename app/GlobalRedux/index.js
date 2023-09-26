"use client";

import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./Slicies/favoriteSlice";

export const store = configureStore({
  reducer: {
    favoriteSlice,
  },
});
