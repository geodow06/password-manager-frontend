import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import LayoutReducer from "./LayoutReducer";

const rootReducer = (history: History) => combineReducers({
    layout: LayoutReducer,
    router: connectRouter(history)
})

export default rootReducer;