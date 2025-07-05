import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { AboutBannerData } from './types';

interface AboutBannerState {
  bannerData: AboutBannerData | null;
  loading: boolean;
}

const initialState: AboutBannerState = {
  bannerData: null,
  loading: false,
};

// ✅ FIXED: Explicitly cast response.data to BannerData
export const fetchAboutBannerData = createAsyncThunk<AboutBannerData, string>(
  'banner/fetchAboutBannerData',
  async (page: string) => {
    const response = await axios.get("/aboutbanner");
    return response.data as AboutBannerData; // ✅ Explicit cast to fix "unknown" error
  }
);


const aboutbannerSlice = createSlice({
  name: 'aboutbanner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutBannerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutBannerData.fulfilled, (state, action) => {
        state.bannerData = action.payload;
        state.loading = false;
      })
      .addCase(fetchAboutBannerData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default aboutbannerSlice.reducer;
