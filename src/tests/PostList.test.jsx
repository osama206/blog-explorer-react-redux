// PostList.test.jsx
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import PostList from "../components/PostList";

test("renders post list with search bar and posts", () => {
  render(
    <Provider store={store}>
      <PostList />
    </Provider>
  );

  // Add assertions based on the expected content rendered by PostList component
});
