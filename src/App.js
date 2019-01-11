import React, { Component, Fragment } from 'react';
import Main from "./pages/main/Main";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>  
          <GlobalStyle />
          <Main />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
