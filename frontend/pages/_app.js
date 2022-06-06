import "../public/assets/css/style.css";
import "../public/assets/css/base.css";
import NextNProgress from "nextjs-progressbar";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function MyApp({ Component, pageProps }) {
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <NextNProgress color="#d93a37" />
      <Component {...pageProps} />
    </AlertProvider>
  );
}

export default MyApp;
