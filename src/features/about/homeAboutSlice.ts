import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { HomeAboutData } from './types';

interface HomeAboutState {
  para1: string;
  para2: string;
  image: string;
  loading: boolean;
}

const initialState: HomeAboutState = {
  para1: '',
  para2: '',
  image: '',
  loading: false,
};

export const fetchHomeAboutData = createAsyncThunk<HomeAboutData | null>(
  'homeAbout/fetchHomeAboutData',
  async () => {
    try {
      const response = await axios.get('/about');
      return response.data || null;
    } catch (error) {
      console.error('Error fetching home about data:', error);
      return null;
    }
  }
);


const homeAboutSlice = createSlice({
  name: 'homeAbout',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeAboutData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeAboutData.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload) {
          const { para1, para2, image } = action.payload;
          state.para1 = para1;
          state.para2 = para2;
          state.image = image;
        } else {
          console.warn('No about data returned from backend.');
          state.para1 = '';
          state.para2 = '';
          state.image = '';
        }
      })
      .addCase(fetchHomeAboutData.rejected, (state) => {
        state.loading = false;
        state.para1 = '';
        state.para2 = '';
        state.image = '';
      });
  },
});

export default homeAboutSlice.reducer;
