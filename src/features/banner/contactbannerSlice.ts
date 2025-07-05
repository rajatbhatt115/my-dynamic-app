import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { ContactBannerData } from './types';

interface BannerState {
  bannerData: ContactBannerData | null;
  loading: boolean;
}

const initialState: BannerState = {
  bannerData: null,
  loading: false,
};

// ✅ FIXED: Explicitly cast response.data to BannerData
export const fetchContactBannerData = createAsyncThunk<ContactBannerData, string>(
  'banner/fetchContactBannerData',
  async (page: string) => {
    const response = await axios.get("/contactbanner");
    return response.data as ContactBannerData; // ✅ Explicit cast to fix "unknown" error
  }
);

const contactbannerSlice = createSlice({
  name: 'contactbanner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactBannerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactBannerData.fulfilled, (state, action) => {
        state.bannerData = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactBannerData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default contactbannerSlice.reducer;
