import { CHANGE_COLOR } from "../action/colorAction";

const initialValue = {
    color: [{newColor: 'pink'}]
};

export default function colorReducer (state = initialValue, action: any) {
    switch(action.type) {
        case CHANGE_COLOR:
            return action.payload;
        default: 
            return state;
    }
};