import Layout from '/components/layout';
import Home from './home';
import Head from 'next/head';

const Index = () => {
  return (
    <Layout>
        <Head>
        <title>Arjun's Portfolio</title>
        <meta property="og:title" content="Arjun's Portfolio" />
        <meta property="og:description" content="A minimalist portfolio containing my works" />
        <meta property="og:image" content="/profile2.jpeg" />
        <meta property="og:url" content="URL of the page" />
        <meta property="og:type" content="website" />
      </Head>
      <Home />
    </Layout>
  );
};

export default Index;