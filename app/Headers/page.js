import React from 'react';
import Link from 'next/link'
import Head from 'next/head';


const Header = () => {
  return (
    <>
    <Head>
        <title>Hassan Omar Mohamed</title>
        <meta property="Auther" content="Hassan Omar Mohamed" />
      </Head>
    <header className="bg-gray-800 text-white p-4">
      <div className="container flex justify-between items-center">
        <div className="flex-grow">
          <Link href="/" className="text-xl font-bold">My Application</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="text-gray-400 hover:text-white">Home</Link>
          </li>
          <li>
            <Link href="/profile" className="text-gray-400 hover:text-white">Profile</Link>
          </li>
          <li>
            <Link href="/Contact" className="text-gray-400 hover:text-white">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
    </>

  );
};

export default Header;
