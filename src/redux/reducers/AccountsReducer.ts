import {
    AccountsActions,
    SET_ACCOUNTS
} from "redux/actions/AccountsActions";
import { defaultAction } from "redux/reduxTypes";
import { Accounts } from "types";

export type AccountsState = Accounts;

const initialState: AccountsState = [];

const AccountsReducer = ( state: AccountsState = initialState, action: AccountsActions = defaultAction): AccountsState => {
    if( action.type === SET_ACCOUNTS ) {
        return action.payload
    }

    return state;
};

export default AccountsReducer