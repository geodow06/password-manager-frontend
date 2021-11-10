import { ComponentType } from "react";

export type route = {
    path: string,
    exact?: boolean,
    component: ComponentType,
    settings?: Settings
};

export type Settings = {
    topbar?: ElementSetting,
    footer?: ElementSetting
};

export type ElementSetting = {
    show?: boolean
}
