import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Facu Lopez Scala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Welcome to my personal page</h1>
        <p>Connect with me on social media:</p>
        <SocialMedia 
          twitter="@faculopezscala"
          linkedin="https://www.linkedin.com/in/faculopez/"
          instagram="faculopezsala"
        />
      </main>

      <Footer />
    </div>
  )
}

export default Home;