import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const initialPassengers = [
  {
    id: uuidv4(),
    nama: "Yoga",
    umur: 22,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Ria",
    umur: 19,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Fahmi",
    umur: 25,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Lala",
    umur: 21,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Ivan",
    umur: 25,
    jenisKelamin: "Pria",
  },
]

export const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengers: initialPassengers,
  },
  reducers: {
    hapusPengunjung: (state, action) => {
      state.passengers = state.passengers.filter((passenger) => {
        return passenger.id !== action.payload
      })
    },
    tambahPengunjung: (state, action) => {
      const newPassenger = {
        id: uuidv4(),
        ...action.payload,
      }
      state.passengers = [...state.passengers, newPassenger]
    },
  },
})

// Action creators are generated for each case reducer function
export const { hapusPengunjung, tambahPengunjung, incrementByAmount } = passengerSlice.actions

export default passengerSlice.reducer
