import { Dispatch } from "@reduxjs/toolkit";

export const CHANGE_REMINDER = 'CHANGE_REMINDER';

export const changeReminder = (data: any) => (dispatch: Dispatch) => {
    dispatch({
        type: CHANGE_REMINDER,
        payload: data,
    })
};
