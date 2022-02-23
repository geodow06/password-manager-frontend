import { ActionWithPayload, DefaultAction } from "redux/reduxTypes";
import { AppDispatch } from "redux/store";
import { Account } from "types";

export const UPDATE_SELECTED = "UPDATE_SELECTED";

export class UpdateSelectedAction extends ActionWithPayload<Account> {
    public readonly type = UPDATE_SELECTED;
}

export type SelectedActions = DefaultAction | UpdateSelectedAction;

export const updateSelected = ( account: Account ) => (dispatch: AppDispatch) => {
    dispatch({
        type: UPDATE_SELECTED,
        payload: account
    });
};