import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

export const DEFAULT_ACTION = "DEFAULT_ACTION";

export abstract class PlainAction {
    public abstract readonly type: string;
    constructor() {
        return Object.assign({}, this);
    }
}

export class DefaultAction extends PlainAction {
    public readonly type = DEFAULT_ACTION;
}

export const defaultAction = new DefaultAction();

export abstract class ActionWithPayload<P extends object = any> extends PlainAction {
    constructor(public readonly payload: P) {
        super();
    }
}

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;