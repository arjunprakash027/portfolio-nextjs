import Head from 'next/head';
import Layout from '/components/layout';
import Home from './home';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">

      <Head>
        <title>Arjun Prakash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full md:w-1/2 p-4 md:p-8 flex flex-col flex-1 bg-white">
        <Layout />
        <Home />
      </main>

      <footer className="w-full h-10 border-t border-gray-300 flex justify-center items-center">
        <a
          className='no-underline text-current'
          href="https://github.com/arjunprakash027"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Arjun Prakash &copy; 2020 - 2024</p>
        </a>
      </footer>

      <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
