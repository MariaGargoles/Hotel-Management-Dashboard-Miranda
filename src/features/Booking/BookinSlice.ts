import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookinThunk } from "./BookinThunk";
import { Booking, BookingState } from "../../types/global";



const initialState: BookingState = {
  status: 'idle',
  data: [],
  error: null,
};

export const BookinSlice = createSlice({
  name: "bookin",
  initialState,
  reducers: {
    addBookin: (state, action: PayloadAction<Booking>) => {
      state.data.push(action.payload);
      state.status = 'fulfilled';
      state.error = null;
      console.log("Añadido con éxito");
    },
    deleteBookin: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
    updateBookin: (state, action: PayloadAction<Booking>) => {
      const index = state.data.findIndex((bookin) => bookin.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
      state.status = 'fulfilled';
      state.error = null;
    },
    setPending: (state) => {
      state.status = 'pending';
    },
    setRejected: (state, action: PayloadAction<string>) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BookinThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(BookinThunk.fulfilled, (state, action: PayloadAction<Booking[]>) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(BookinThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      });
  },
});

export const { addBookin, deleteBookin, updateBookin, setPending, setRejected } = BookinSlice.actions;
export default BookinSlice.reducer;
