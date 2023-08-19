import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
import userSlice from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user:userSlice,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});
