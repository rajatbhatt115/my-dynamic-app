import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { FaqItem } from './types';


interface FaqState {
  faqs: FaqItem[];
  loading: boolean;
}

const initialState: FaqState = {
  faqs: [],
  loading: false,
};

export const fetchFaqData = createAsyncThunk<FaqItem[]>(
  'faq/fetchFaqData',
  async () => {
    const res = await axios.get('/faqs');
    return res.data as FaqItem[]; // 👈 Explicit type cast (safe here)
  }
);

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFaqData.fulfilled, (state, action) => {
        state.faqs = action.payload;
        state.loading = false;
      })
      .addCase(fetchFaqData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default faqSlice.reducer;
