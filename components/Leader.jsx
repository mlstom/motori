import React from 'react'
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';


const Leader = ({ children }) => {
  return (
    <div >
      <Head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <title>moto</title>
      </Head>  
      <header >
        <Header />
      </header>
      <main >
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Leader