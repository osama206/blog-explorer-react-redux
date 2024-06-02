// PostDetails.test.jsx
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import PostDetails from "../components/PostDetails";

test("renders post details and comments", () => {
  const post = { id: 1, title: "Test Post", body: "This is a test post." };
  render(
    <Provider store={store}>
      <PostDetails post={post} />
    </Provider>
  );

  // Add assertions based on the expected content rendered by PostDetails component
});
