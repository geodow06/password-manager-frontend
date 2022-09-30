import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import AccountsReducer from "./AccountsReducer";
import LayoutReducer from "./LayoutReducer";

const rootReducer = (history: History) => combineReducers({
    layout: LayoutReducer,
    accounts: AccountsReducer,
    router: connectRouter(history)
})

export default rootReducer;
