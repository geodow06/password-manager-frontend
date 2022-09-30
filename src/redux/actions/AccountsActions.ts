import { ActionWithPayload, DefaultAction } from "redux/reduxTypes";
import { AppDispatch } from "redux/store";
import { Accounts } from "types";

export const SET_ACCOUNTS = "SET_ACCOUNTS";

export class SetAccountsAction extends ActionWithPayload<Accounts> {
    public readonly type = SET_ACCOUNTS;
}

export type AccountsActions = DefaultAction | SetAccountsAction;

export const setAccounts = ( accounts: Accounts ) => (dispatch: AppDispatch) => {
    dispatch({
        type: SET_ACCOUNTS,
        payload: accounts
    });
};
