import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import ChatReducer from "./ChatSlice";

const reducers = combineReducers({
    app: appReducer,
    chat:ChatReducer
})


const Store = configureStore({
    reducer: reducers,

})
export default Store;