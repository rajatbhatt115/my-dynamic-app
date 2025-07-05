import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

// 👇 Define team member structure
export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
}

// 👇 Define slice state
interface TeamState {
  members: TeamMember[];
  loading: boolean;
}

// 👇 Initial state
const initialState: TeamState = {
  members: [],
  loading: false,
};

// ✅ FIXED: Explicitly define return type as TeamMember[]
export const fetchTeamData = createAsyncThunk<TeamMember[]>(
  'team/fetchTeamData',
  async () => {
    const res = await axios.get('/team');
    return res.data as TeamMember[];
  }
);

// 👇 Create slice
const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeamData.fulfilled, (state, action) => {
        state.members = action.payload;
        state.loading = false;
      })
      .addCase(fetchTeamData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default teamSlice.reducer;
