import { RecoilRoot } from "recoil";

import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;
