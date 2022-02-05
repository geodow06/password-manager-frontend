import { ActionWithPayload, DefaultAction } from "redux/reduxTypes";
import { AppDispatch } from "redux/store";
import { Accounts } from "types";

export const SET_ACCOUNTS = "SET_ACCOUNTS";

export type SetAccountsActionPayload = Accounts;

export class SetAccountsAction extends ActionWithPayload<SetAccountsActionPayload> {
    public readonly type = SET_ACCOUNTS;
}

export type AccountsActions = DefaultAction | SetAccountsAction;

export const setAccounts = ( payload: SetAccountsActionPayload ) => (dispatch: AppDispatch) => {
    dispatch({
        type: SET_ACCOUNTS,
        payload: payload
    });
};