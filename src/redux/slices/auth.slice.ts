import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "redux/store";
import { UserModel } from "models";
import { IAction } from "redux/types";

interface AuthState {
    token: string | null;
    user: UserModel | null;
}

const initialState: AuthState = {
    token: localStorage.getItem('token'),
    user: null
}

const initialSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        signUpRequest(
            state: AuthState,
            action: PayloadAction <AppActionTypes.Auth.GetSignUpRequestAction>
        ){ },

        signInRequest(
            state: AuthState,
            action: PayloadAction <AppActionTypes.Auth.GetSignInRequestAction>
        ){ },

        setToken(
            state: AuthState,
            action: PayloadAction<string>
        ){
            state.token = action.payload;
            localStorage.setItem('token',action.payload)
        },

        logOut(
            state: AuthState,
        ){
            localStorage.removeItem('token');
            state.user = null;
            state.token = null;
        },

        getMeRequest(
            state: AuthState,
            action: PayloadAction<IAction>
        ){},

        getMeRequestSuccess(
            state: AuthState,
            action:PayloadAction<UserModel>
        ){
            state.user = action.payload;
        }
    }
})

export const actions = initialSlice.actions;
export const reducer = initialSlice.reducer;