// components/layout.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';


const Layout = ({ children }) => {

  useEffect(() => {
    // force the full page dark mode
    document.documentElement.style.backgroundColor = "#0A192F";
    document.body.style.backgroundColor = "#0A192F";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-gray-900 text-blue-100">
      <main className="w-full md:w-5/6 p-4 md:p-8 bg-gray-900">
          <div className="navbar flex flex-col md:flex-row justify-between items-center p-4 mb-12">
          <div className="logo mb-4 md:mb-0">
              <span className="text-4xl">
                Arjun Prakash
              </span>
          </div>
          <nav className="nav flex gap-4 text-2xl">
            <Link href="/">
              <span className="link" title="Home">
                Home
              </span>
            </Link>

            <Link href="/nuggets">
              <span className="link" title="Nuggets">
                Nuggets
              </span>
            </Link>
            
            <Link href="/projects">
              <span className="link" title="Projects">
                Projects
              </span>
            </Link>

            <Link href="/blogs">
              <span className="link" title="Blogs">
                Blogs
              </span>
            </Link>

            {/* <Link href="/career">
              <span className="link" title="Career">
                Career
              </span>
            </Link> */}
          </nav>
        </div>
        {children}
        <footer className="w-full h-2 flex justify-center items-center">
          <a
            className="no-underline text-current"
            href="/links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Arjun Prakash &copy; 2023 - 2025</p>
          </a>
        </footer>
      </main>
      
      <Head>
        <title>Arjun's Portfolio</title>
        <link rel="icon" href="https://icons8.com/icon/15097/a" />
        <meta property="og:title" content="Arjun's Portfolio" />
        <meta property="og:description" content="A minimalist portfolio containing my works" />
        <meta property="og:image" content="https://icons8.com/icon/15097/a" />
        <meta property="og:url" content="URL of the page" />
        <meta property="og:type" content="website" />
      </Head>
    </div>
  );
};

export default Layout;
