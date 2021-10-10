import Head from 'next/head';
import Nav from '../components/Nav';
import Searchbar from '../components/Searchbar';

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel='shortcut icon'
          href='/sun.svg'
          type='image/svg+xml'
          sizes='16x16'
        />
        <title>SimpleWeatherApp</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
          key='viewport'
        />
        <meta
          name='description'
          content='A VERY simple weather application. Made for portfolio.'
          key='description'
        />
      </Head>
      <Nav />
      <Searchbar />
    </div>
  );
}
