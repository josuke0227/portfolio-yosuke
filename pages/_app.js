import React from "react";
import "@/styles/main.scss";
import { UserProvider } from "@auth0/nextjs-auth0";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};
export default App;
