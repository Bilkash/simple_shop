import {UserSliceType} from "@/types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: UserSliceType = {
    name: "",
    email: "",
    contactNumber: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setUserEmail: (state, action) => {
            state.email = action.payload;
        },
        setUserContactNumber: (state, action) => {
            state.contactNumber = action.payload;
        }
    }
});

export const {
    setUserName,
    setUserEmail,
    setUserContactNumber
} = userSlice.actions;

export default userSlice.reducer;
