import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { BannerData } from './types';

interface BannerState {
  bannerData: BannerData | null;
  loading: boolean;
}

const initialState: BannerState = {
  bannerData: null,
  loading: false,
};

// ✅ FIXED: Explicitly cast response.data to BannerData
export const fetchBannerData = createAsyncThunk<BannerData, string>(
  'banner/fetchBannerData',
  async (page: string) => {
    const response = await axios.get("/banner");
    return response.data as BannerData; // ✅ Explicit cast to fix "unknown" error
  }
);

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBannerData.fulfilled, (state, action) => {
        state.bannerData = action.payload;
        state.loading = false;
      })
      .addCase(fetchBannerData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default bannerSlice.reducer;
