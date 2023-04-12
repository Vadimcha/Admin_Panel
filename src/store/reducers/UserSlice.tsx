import {createSlice} from "@reduxjs/toolkit";

interface CounterState {
    theme: string,
    modal: boolean,
    sidebar: boolean,
    cur_problem: number
}

let cook = document.cookie
let theme = 'dark'
if(cook.includes('theme') && cook.includes('light'))
    theme = 'light'

const initialState: CounterState = {
    theme: theme,
    modal: false,
    sidebar: false,
    cur_problem: 0
}

export const themeSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        switch_theme(state) {
            state.theme = (state.theme === "dark" ? "light" : "dark");
            document.cookie = "theme="+state.theme
        },
        switch_visibl(state) {
            state.modal = !state.modal
        },
        switch_sidebar(state) {
            state.sidebar = !state.sidebar
        },
        switch_problem(state, action) {
            state.cur_problem = action.payload
        }
    }
})

export default themeSlice.reducer;