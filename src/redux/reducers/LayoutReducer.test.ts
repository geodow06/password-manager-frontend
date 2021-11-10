import reducer from "./LayoutReducer";
import { LayoutSettings } from "layout/settings";
import { SetLayoutSettingsAction, SetLayoutSettingsActionPayload } from "redux/actions/LayoutActions";

const initialState = {
    settings: {
        ...LayoutSettings
    }
};

describe('Should return previous state', () => {
    const previousStateSettings = {
        settings: {
            topbar: {
                show: true
            },
            footer: {
                show: true
            }
        }
    }
    test('When passed no arguments', () => {
        expect(reducer()).toEqual(initialState);
    })

    test('When no action is passed', () => {
        expect(reducer(previousStateSettings)).toEqual(previousStateSettings);
    });
})

test('Should return correctly updated settings', () => {
    const newSettingsPayload: SetLayoutSettingsActionPayload = {
        topbar: {
            show: true
        },
        footer: {
            show: false
        }
    }

    const newSettings = {
        ...initialState,
        settings: {...newSettingsPayload}
    }
    
    const setLayoutAction = new SetLayoutSettingsAction(newSettingsPayload);
    expect(reducer(undefined, setLayoutAction)).toEqual(newSettings);
})