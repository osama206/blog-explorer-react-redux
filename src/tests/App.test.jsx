// App.test.jsx
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";

test("renders App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Add assertions based on the expected content rendered by App component
});
