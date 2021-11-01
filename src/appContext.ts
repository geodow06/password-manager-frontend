import { createContext, Context } from "react";
import { route } from "types";

export type MyContextType = {
    routes: route[]
};

const defaultContext: MyContextType = {
    routes: []
};

const AppContext: Context<MyContextType> = createContext<MyContextType>(defaultContext);

export default AppContext;