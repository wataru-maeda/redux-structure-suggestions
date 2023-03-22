import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "@utils/redux";
import { initializedClient } from "@utils/apollo";
import ExampleView from "./ExampleView";

const App = () => {
  return (
    <ApolloProvider client={initializedClient}>
      <Provider store={store}>
        <ExampleView />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
