import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../../../Firebase";
import { setDoc, doc } from "firebase/firestore";



// export const SetEmail = createAsyncThunk(
//     "emailSlice/setEmail",
//     async (userExpense, { rejectWithValue, getState }) => {
//         try {
//             const user = auth.currentUser;
//             const state = getState();
//             const prevUserData = state.AddExpenseSlices.userData; // Replace 'ProductSlice' with the actual name of your slice

//             if (user) {
//                 console.log(state.Expenses)
//                 await setDoc(doc(db, "userdata", user.uid), {
//                     userexpenses: [...prevUserData, userExpense],
//                 });
//                 return userExpense;
//             } else {
//                 throw new Error("User not authenticated");
//             }
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// )


const StoreEmail = createSlice({
    name: "storeEmailSlices",
    initialState: {
        user:null,
    },
    reducers: {
        addEmail: (state, action) => {
           state.user = action.payload;
           console.log(state.user)
        },
        
    },

    // extraReducers: (builder) => {
    //     builder
    //         .addCase(addExpense.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(addExpense.fulfilled, (state, action) => {
    //             state.loading = false;
    //             console.log("Successfully added expense");
    //         })
    //         .addCase(addExpense.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //             console.log("Failed to add expense", action.payload);
    //         });
    // },
});

export const { addEmail } = StoreEmail.actions;
export default StoreEmail.reducer;