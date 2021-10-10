import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import ShowContextProvider from '../store/show-context';
import ErrorContextProvider from '../store/error-contex';

function MyApp({ Component, pageProps }) {
  return (
    <ShowContextProvider>
      <ErrorContextProvider>
        <Component {...pageProps} />
      </ErrorContextProvider>
    </ShowContextProvider>
  );
}

export default MyApp;
