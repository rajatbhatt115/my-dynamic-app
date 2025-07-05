// ✅ 15. src/features/contact/contactSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactState {
  status: 'idle' | 'submitting' | 'succeeded' | 'failed';
}

const initialState: ContactState = {
  status: 'idle',
};

export const submitContactForm = createAsyncThunk(
  'contact/submitContactForm',
  async (formData: ContactFormData) => {
    await axios.post('/contact', formData);
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'submitting';
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitContactForm.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default contactSlice.reducer;
