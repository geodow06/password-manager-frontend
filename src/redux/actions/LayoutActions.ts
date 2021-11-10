import { ActionWithPayload, DefaultAction } from "redux/reduxTypes";
import { AppDispatch } from "redux/store";
import {  Settings } from "types";

export const SET_LAYOUT_SETTINGS = "LAYOUT_SET_SETTINGS";

export type SetLayoutSettingsActionPayload = Settings;

export class SetLayoutSettingsAction extends ActionWithPayload<SetLayoutSettingsActionPayload> {
  public readonly type = SET_LAYOUT_SETTINGS;
}

export type LayoutActions = DefaultAction | SetLayoutSettingsAction;

export const setLayoutSettings = (payload: SetLayoutSettingsActionPayload) => (dispatch: AppDispatch) => {
  dispatch({
    type: SET_LAYOUT_SETTINGS,
    payload: payload
  });
};
