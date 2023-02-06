import { Provider } from "react-redux"
import Store from "../../store/store"
import '../styles/globals.scss'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Provider store={Store}> 
          <Component {...pageProps} />
        </Provider>
    </>
  
  )
}