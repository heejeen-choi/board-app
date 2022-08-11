// import '../../public/styles/globals.css';
import type {AppProps} from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <div>
      <h1>Board App</h1>
      <Component/>
    </div>
  );
}

export default MyApp;
