import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../components/util/Loader/Loader";
import Store from "../../store/store";
import "../styles/globals.scss";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <Loader>
          <ToastContainer/>
          <Component {...pageProps} />
        </Loader>
      </Provider>
    </>
  );
}
