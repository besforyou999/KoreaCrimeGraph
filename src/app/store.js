import { configureStore } from '@reduxjs/toolkit';
import csvDataReducer from '../features/csvData/csvDataSlice';
import inputReducer from '../features/input/inputSlice';

export default configureStore({
  reducer: {
    csvData: csvDataReducer,
    input: inputReducer,
  }
})