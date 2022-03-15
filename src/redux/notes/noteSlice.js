import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        search: [],
    },
    reducers: {
        createNote: (state, action) => {
            state.items.push({
                'note': action.payload.note,
                'color': action.payload.color
            })
        },
        searchNote: (state, action) => {
            debugger
            state.search = action.payload
        }
    }
})
export const { createNote, searchNote } = notesSlice.actions
export default notesSlice.reducer