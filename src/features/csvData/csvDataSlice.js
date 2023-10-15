import { createSlice } from '@reduxjs/toolkit';


export const csvDataSlice = createSlice({
  name: 'csvData',
  initialState: {
    locations: [],
    csvData: [],
    crimeData: {},
    mainPageType: 1,
  },
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setCsvData: (state, action) => {
      state.csvData = action.payload;
      
      for (const ele of action.payload.data) 
        state.crimeData[ele['범죄분류']] = Object.assign({}, ele);
      
    },
    setMainPageType: (state, action) => {
      state.mainPageType = action.payload;
    }
  }
})

export const {setLocations, setCsvData, setMainPageType} = csvDataSlice.actions;

export default csvDataSlice.reducer;