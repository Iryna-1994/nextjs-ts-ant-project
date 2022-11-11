import type { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import Nominate from '../components/Nominate'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nominate />
    </>
  )
}

export default Home
