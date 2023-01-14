import { createSlice } from "@reduxjs/toolkit";

const presentViewSlice = createSlice({
    name: "presentView",
    initialState: {
        currentView: {
            codeView: true,
            preView: true
        }
    },
    reducers: {
        presentMobileCompatibleView: (state) => {
            state.currentView = { codeView: true, preView: false }
        },
        presentDesktopCompatibleView: (state) => {
            state.currentView = { codeView: true, preView: true }
        },
        presentCodeView: (state) => {
            state.currentView = { codeView: true, preView: false }
        },
        presentPreView: (state) => {
            state.currentView = { codeView: false, preView: true }
        }
    }
})

export const { presentMobileCompatibleView, presentDesktopCompatibleView, presentCodeView, presentPreView } = presentViewSlice.actions;
export default presentViewSlice;