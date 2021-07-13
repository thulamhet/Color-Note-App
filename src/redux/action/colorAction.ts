import { Dispatch } from "@reduxjs/toolkit";

export const CHANGE_COLOR = 'CHANGE_COLOR';

export const changeColor = (data: any) => (dispatch: Dispatch) => {
    dispatch ({
        type: CHANGE_COLOR,
        payload: data
    })
};
