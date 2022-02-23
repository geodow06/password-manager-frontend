import { SelectedActions, UPDATE_SELECTED } from "redux/actions/SelectedActions";
import { defaultAction } from "redux/reduxTypes";
import { Accounts } from "types";

export type SelectedState = Accounts;

const initialState: SelectedState = [];

const SelectedReducer = ( state: SelectedState = initialState, action: SelectedActions = defaultAction): SelectedState => {
    console.log("called reducer")
    console.log(state)
    if( action.type === UPDATE_SELECTED ) {
        const isSelected = state.some(a => a.accountId === action.payload.accountId);

        // Check if already selected
        if (isSelected) {
            // If selected remove
            return state.filter(a => a.accountId !== action.payload.accountId)
        }
        // If not selected add
        return [...state, action.payload];
    }

    return [...state];
};

export default SelectedReducer;