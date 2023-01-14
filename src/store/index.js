import { combineReducers, configureStore } from "@reduxjs/toolkit";
import plainCodeSlice from "./plainCodeSlice";
import presentViewSlice from "./presentViewSlice";

const store = configureStore({
    reducer: combineReducers({
        plainCode: plainCodeSlice.reducer,
        presentView: presentViewSlice.reducer
    })
})

export default store;