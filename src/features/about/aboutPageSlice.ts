import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { AboutData } from './types';

interface AboutPageState {
  aboutData: AboutData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AboutPageState = {
  aboutData: null,
  loading: false,
  error: null,
};

// ✅ Async thunk with explicit typing and error handling
export const fetchAboutPageData = createAsyncThunk<AboutData, void, { rejectValue: string }>(
  'aboutPage/fetchAboutPageData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/AboutpageAbout');
      if (!response.data) {
        return rejectWithValue('No about data received');
      }
      return response.data as AboutData;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch about data');
    }
  }
);

const aboutPageSlice = createSlice({
  name: 'aboutPage',
  initialState,
  reducers: {
    // Optional: if you want to reset the state manually
    resetAboutPage: (state) => {
      state.aboutData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutPageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAboutPageData.fulfilled, (state, action: PayloadAction<AboutData>) => {
        state.aboutData = action.payload;
        state.loading = false;
      })
      .addCase(fetchAboutPageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export const { resetAboutPage } = aboutPageSlice.actions;
export default aboutPageSlice.reducer;
