// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Import the main App component
import App from "./App";

// Import TransactionsProvider from the context/TransactionContext file
import { TransactionsProvider } from "./context/TransactionContext";

// Import styles from the index.css file
import "./index.css";

// Render the App component wrapped in TransactionsProvider
ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  // Mount the rendered content in the HTML element with the ID "root"
  document.getElementById("root"),
);
