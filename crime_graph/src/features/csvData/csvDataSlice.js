import { createSlice } from '@reduxjs/toolkit';

export const csvDataSlice = createSlice({
  name: 'csvData',
  initialState: {
    locations: [],
    csvData: [],
    mainPageType: 1,
  },
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setCsvData: (state, action) => {
      state.csvData = action.payload;
    },
    setMainPageType: (state, action) => {
      state.mainPageType = action.payload;
    }
  }
})

export const {setLocations, setCsvData, setMainPageType} = csvDataSlice.actions;

export default csvDataSlice.reducer;