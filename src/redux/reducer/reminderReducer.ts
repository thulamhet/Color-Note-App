import { CHANGE_REMINDER } from "../action/reminderAction";

const initialValue = {
    // XOA DONG NAY THI PHAI DOI ID O PHAN ADD
    noteList : [{key: 0, title: "ads", note: "ads"}]
};

export default function reminderReducer(state = initialValue, action: any) {
    switch(action.type) {
        case CHANGE_REMINDER:
            return action.payload
        default:
            return state;
    }
}