import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../../../Firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";


export const SetEmail = createAsyncThunk(
    "emailSlice/setEmail",
    async (emailObj, { rejectWithValue, getState }) => {
      try {
        const state = getState();
        const user = auth.currentUser;
        const { to } = emailObj;
  
        if (user) {
          const docRef = doc(db, 'sendEmail', user.uid);
          const docEmailRef = doc(db, 'sendEmail', to);
          const docSnap = await getDoc(docRef);
          const docEmailSnap = await getDoc(docEmailRef);
  
          let existingEmails = [];
          let existingSendMails = [];
  
          if (docSnap.exists()) {
            existingEmails = docSnap.data()?.emails || [];
          }
  
          if (docEmailSnap.exists()) {
            existingSendMails = docEmailSnap.data()?.emails || [];
          }
  
          const updatedEmails = [...existingEmails, emailObj];
          const updatedSendEmails = [...existingSendMails, emailObj];
  
          await setDoc(docRef, { emails: updatedEmails });
          await setDoc(docEmailRef, { emails: updatedSendEmails });
  
          alert("Email sent successfully!");
  
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  

const StoreEmail = createSlice({
    name: "storeEmailSlices",
    initialState: {
        user:null,
        sendEmail :[]
    },
    reducers: {
        setUser: (state, action) => {
            const currUser = action.payload;
            state.user = currUser
          },
          SetEmailData: (state, action) => {

            state.sendEmail = action.payload;
            console.log(state.sendEmail);
          }
        
    },

    extraReducers: (builder) => {
        builder
            .addCase(SetEmail.pending, (state) => {
                state.error = null;
            })
            .addCase(SetEmail.fulfilled, (state, action) => {
                console.log("Successfully added expense");
            })
            .addCase(SetEmail.rejected, (state, action) => {
                console.log("Failed to add expense", action.payload);
            });
    },
});

export const { setUser,SetEmailData } = StoreEmail.actions;
export default StoreEmail.reducer;