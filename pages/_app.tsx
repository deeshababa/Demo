import "../styles/globals.css";
import type { AppProps } from "next/app";
import Routing from "../routers/routing";
import "../styles/globals.css";
import AuthProvider from "../src/context/AuthProvider";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <AuthProvider>
      <Routing Component={Component} pageProps={pageProps} router={router} />
    </AuthProvider>
  );
};

export default MyApp;
