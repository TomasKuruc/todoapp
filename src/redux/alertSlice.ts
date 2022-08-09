import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "redux/store";

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertState {
    show: boolean,
    type?: AlertType,
    text: string
}

const initialState: AlertState = {
    show: false,
    type: "info",
    text: ""
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, action: PayloadAction<AlertState>) => {
            Object.assign(state, action.payload);
        },
    },
})

export const { showAlert } = alertSlice.actions;

export const selectAlertState = (state: RootState) => state.alert;

export default alertSlice.reducer;