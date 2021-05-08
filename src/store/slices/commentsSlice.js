import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockComments } from "../api";
import { client } from "../../api/client";

export const fetchComments = createAsyncThunk("comments", async () => {
  return await client.get("https://jsonplaceholder.typicode.com/comments");
});

//even though we fetch from API to display initial comments,
// still let initial comments contain mockComments as well,
// because API provided comments have no repeated people names
// required for <TopCommenters/> demonstration of top commenters.
// <TopCommenters/> initially shows top commenters from mockComments,
// but if you were to fetch from a different API or create new comments manually
// on behalf of existing people, <TopCommenters/> would update properly being the source of truth at all times.

// define types for initial state
interface CommentState {
  comments: [];
  status: string;
  error: string;
}

const initialState: CommentState = {
  comments: mockComments,
  status: "idle",
  error: null,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    submitComment(state, action) {
      state.comments.push(action.payload);
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Populate state with fetched comments
      state.comments = state.comments.concat(action.payload);
    },
    [fetchComments.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { submitComment } = commentSlice.actions;
export default commentSlice.reducer;

export const selectAllComments = (state) => state.comments.comments;
