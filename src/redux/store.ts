import rootReducer from "./reducers/RootReducer"
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import myHistory from "myHistory";
import { routerMiddleware } from "connected-react-router";

export const configureStore = () => {
    
    const middlewares: any = [
        thunk,
        routerMiddleware(myHistory)
    ];

    return createStore(
        rootReducer(myHistory),
        compose(
            applyMiddleware(...middlewares)
        )
    )
}

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;