// pages/_app.js
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Your custom code or effects
  useEffect(() => {
    // Add any global initialization logic if needed
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
