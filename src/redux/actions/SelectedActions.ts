import { ActionWithPayload, DefaultAction, PlainAction } from "redux/reduxTypes";
import { AppDispatch } from "redux/store";
import { Account } from "types";

export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const CLEAR_SELECTED = "CLEAR_SELECTED";

export class UpdateSelectedAction extends ActionWithPayload<Account> {
    public readonly type = UPDATE_SELECTED;
}

export class ClearSelectedAction extends PlainAction {
    public readonly type = CLEAR_SELECTED;
}

export type SelectedActions = DefaultAction | UpdateSelectedAction | ClearSelectedAction;

export const updateSelected = ( account: Account ) => (dispatch: AppDispatch) => {
    dispatch({
        type: UPDATE_SELECTED,
        payload: account
    });
};

export const clearSelected = () => (dispatch: AppDispatch) => {
    dispatch({
        type: CLEAR_SELECTED
    });
};