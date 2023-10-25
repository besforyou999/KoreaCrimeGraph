import { createSlice } from '@reduxjs/toolkit';

export const csvDataSlice = createSlice({
  name: 'csvData',
  initialState: {
    locations: [],
    csvData: [],
    crimeData: {},
    crime_count: {},
    mainPageType: 1,
    dataRead: false
  },
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setCsvData: (state, action) => {
      state.csvData = action.payload;
      
      for (const ele of action.payload.data) {
        state.crimeData[ele['범죄분류']] = Object.assign({}, ele);

        let crime = '';
        let count = 0;

        for (const key in ele) {
          if (key === '범죄분류') 
            crime = ele[key]
          else 
            count += ele[key]
        }

        state.crime_count[crime] = count
      }
      
    },
    setMainPageType: (state, action) => {
      state.mainPageType = action.payload;
    },
    setDataRead: (state, action) => {
      state.dataRead = action.payload
    }
  }
})

export const {setLocations, setCsvData, setMainPageType, setDataRead} = csvDataSlice.actions;

export default csvDataSlice.reducer;