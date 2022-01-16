import { ActionWithPayload, DefaultAction } from "redux/reduxTypes";
import { AppDispatch } from "redux/store";
import { Account } from "types";

export const SET_ACCOUNTS = "SET_ACCOUNTS";

export type SetAccountsActionPayload = Account[];

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