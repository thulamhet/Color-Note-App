import { CHANGE_REMINDER } from "../action/reminderAction";

const initialValue = {
    noteList : []
};

export default function reminderReducer(state = initialValue, action: any) {
    switch(action.type) {
        case CHANGE_REMINDER:
            return action.payload
        default:
            return state;
    }
}