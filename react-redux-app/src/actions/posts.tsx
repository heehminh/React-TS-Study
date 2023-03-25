import axios from "axios";

export const fetchPosts = (): any => {
  return async function fetchPostsThunk(dispatch: any, getState: any) {
    // action을 보내거나, state를 읽는 로직 작성
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};
