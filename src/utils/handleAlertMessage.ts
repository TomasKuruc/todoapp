import {AlertState, AlertType, showAlert} from "redux/alertSlice";
import {Dispatch} from "redux";
import {PayloadAction} from "@reduxjs/toolkit";

export const handleAlertMessage = (type: AlertType, text: string, dispatch:  Dispatch<PayloadAction<AlertState>>): void => {
    dispatch(showAlert({show: true, type: type, text: text}));
    setTimeout(() => {
        dispatch(showAlert({show: false, text: ""}));
    }, 1500);
}
