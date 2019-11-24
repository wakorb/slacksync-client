import React from "react";
import { Provider } from "react-redux";
import Root from "./components/Root";
import store from "./Store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Root />
        </Provider>
      </header>
    </div>
  );
}

export default App;
