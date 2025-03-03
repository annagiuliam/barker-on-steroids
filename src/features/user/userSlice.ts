import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface UserState {
  userName: string
  password: string
};

// Define the initial state using that type
const initialState: UserState = {
  userName: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },

  },
});

// Export actions
export const { setUserName, setPassword } = userSlice.actions;

// Export selectors
export const selectUser = (state: RootState) => state.user;
export const selectUserName = (state: RootState) => state.user.userName;
export const selectPassword = (state: RootState) => state.user.password;

//export reducer, required from store
export default userSlice.reducer;
