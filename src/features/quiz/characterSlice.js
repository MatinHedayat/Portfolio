import { createSlice } from '@reduxjs/toolkit';
import useLocalStorage from '../../hooks/quiz/useLocalStorage';

const { getLocalStorage } = useLocalStorage();
const initialState = getLocalStorage('character') || {
  username: '',
  avatar: 'avatars/1.jpg',
  isLogin: false,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    loginCharacter: (state, action) => action.payload,
    logoutCharacter: (state, action) => {
      localStorage.removeItem('character');
      return initialState;
    },
  },
});

export default characterSlice.reducer;
export const { loginCharacter, logoutCharacter } = characterSlice.actions;
