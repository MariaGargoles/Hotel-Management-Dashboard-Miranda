import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../context/AuthUserContext";
import roomReducer from "../features/Room/RoomSlice";
import bookinReducer from "../features/Booking/BookinSlice";
import userReducer from "../features/Users/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
    bookin: bookinReducer,
    users: userReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];