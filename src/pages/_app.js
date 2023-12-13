import "@/styles/globals.css";
import { Helmet } from "react-helmet";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
      </Helmet>
      <Component {...pageProps} />;
    </>
  );
}
