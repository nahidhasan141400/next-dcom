import { Provider } from "react-redux";
import Loader from "../../components/util/Loader/Loader";
import Store from "../../store/store";
import "../styles/globals.scss";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <Loader>
          <Component {...pageProps} />
        </Loader>
      </Provider>
    </>
  );
}
