import { wrapper } from "../states/store";

import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
