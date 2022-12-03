import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { weatherReduser } from "./weatherReduser";

const rootReducer = combineReducers({
    weatherData: weatherReduser,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

