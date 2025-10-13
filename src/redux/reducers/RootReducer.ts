import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import AccountsReducer from "./AccountsReducer";
import LayoutReducer from "./LayoutReducer";
import SelectedReducer from "./SelectedReducer";

const rootReducer = (history: History) => combineReducers({
    layout: LayoutReducer,
    accounts: AccountsReducer,
    selected: SelectedReducer,
    router: connectRouter(history)
})

export default rootReducer;
