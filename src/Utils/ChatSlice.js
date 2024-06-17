import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        massage: [],
    },
    reducers: {
        setMassage: (state, action) => {
            state.massage.splice(40,1)
            state.massage.push(action.payload)
        }
    }
})

export const { setMassage } = ChatSlice.actions;
export default ChatSlice.reducer;