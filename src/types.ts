import { ComponentType } from "react";

export type route = {
    path: string,
    exact?: boolean,
    component: ComponentType,
    settings?: settings
};

export type settings = {
    topbar?: elementSetting,
    footer?: elementSetting
};

export type elementSetting = {
    show?: boolean
}