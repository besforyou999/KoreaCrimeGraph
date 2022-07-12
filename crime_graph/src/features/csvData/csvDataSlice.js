import { createSlice } from '@reduxjs/toolkit';


export const csvDataSlice = createSlice({
  name: 'csvData',
  initialState: {
    locations: [],
    csvData: []
  },
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setCsvData: (state, action) => {
      state.csvData = action.payload;
    },
  }
})

export const {setLocations, setCsvData} = csvDataSlice.actions;

export default csvDataSlice.reducer;