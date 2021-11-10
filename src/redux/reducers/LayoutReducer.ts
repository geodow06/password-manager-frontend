import {
    LayoutActions,
    SET_LAYOUT_SETTINGS
  } from "redux/actions/LayoutActions";
import { LayoutSettings } from "layout/settings";
import { defaultAction } from "redux/reduxTypes";

const initialState = {
    settings: {
      ...LayoutSettings
    }
};

const LayoutReducer = ( state = initialState, action: LayoutActions = defaultAction ) => {
    if( action.type === SET_LAYOUT_SETTINGS ) {
        return {
            ...state,
            settings: { ...action.payload }
        };
    }

    return { ...state };
};

export default LayoutReducer;