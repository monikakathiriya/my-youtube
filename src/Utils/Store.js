import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice";

const reducers = combineReducers({
    app: appReducer,
})
const Store = configureStore({

    reducer: reducers,

})
export default Store;