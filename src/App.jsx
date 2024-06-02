import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import PostList from "./components/PostList";
import "./styles/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Posts</h1>
        <PostList />
      </div>
    </Provider>
  );
};

export default App;
