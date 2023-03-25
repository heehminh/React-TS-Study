import axios from "axios";

/** modern ES2015 형태로 작성 */
export const fetchPosts = (): any => async (dispatch: any, getState: any) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
