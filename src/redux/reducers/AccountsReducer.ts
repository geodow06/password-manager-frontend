import {
    AccountsActions,
    SET_ACCOUNTS
} from "redux/actions/AccountsActions";
import { defaultAction } from "redux/reduxTypes";
import { Account } from "types";

interface AccountsState {
    accounts: Account[]
}

const initialState: AccountsState = {
    accounts: []
};

const AccountsReducer = ( state = initialState, action: AccountsActions = defaultAction) => {
    if( action.type === SET_ACCOUNTS ) {
        return {
            ...state,
            accounts: { ...action.payload }
        }
    }

    return { ...state };
};

export default AccountsReducer