import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDate: null
    },
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        }
    }
});

export const {setUserData, clearUser} = userSlice.actions;
export default userSlice.reducer;