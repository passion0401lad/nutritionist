import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "redux/store";
import { UserModel } from "models";
import { IAction } from "redux/types";

interface FileLoadState {
    
}

const initialState: FileLoadState = {
    
}

const initialSlice = createSlice({
    name: 'fileLoad',
    initialState: initialState,
    reducers: {
        fileLoadRequest(
            state: FileLoadState,
            action: PayloadAction <AppActionTypes.File_Load.UploadFile>
        ){ },
    }
})

export const actions = initialSlice.actions;
export const reducer = initialSlice.reducer;