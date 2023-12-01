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
    <header className="shadow-xl text-white p-4">
      <div className="container flex justify-between items-center">
        <div className="flex-grow">

                  <img src="http://res.cloudinary.com/dav4htlfu/image/upload/v1701437684/menu/oozjjx4leb2rkjwholq1.png" alt="SOMPIC" width="200" />

        </div>
 
      </div>
    </header>
    </>

  );
};

export default Header;
