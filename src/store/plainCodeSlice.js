import { createSlice } from "@reduxjs/toolkit";

const plainCodeSlice = createSlice({
    name: "plainCode",
    initialState: {
        codeString: `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>React App</title>
                </head>

                <body>
                    <h1>Hello React</h1>
                </body>
            </html>
        `
    },
    reducers: {
        setCodeString: (state, { payload }) => {
            state.codeString = payload
        }
    }
})

export const { setCodeString } = plainCodeSlice.actions;
export default plainCodeSlice;