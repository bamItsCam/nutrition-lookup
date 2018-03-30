import Head from 'next/head';
import Navbar from '../components/Navbar'
import Github from '../components/Github'

const Index = () => (
	<div>
		<Head>
      <title>LOL API Test</title>
      <link href="/static/main.css" rel="stylesheet" />
    </Head>
		<Navbar />
		<p>Hello Next.js</p>
		<Github />
	</div>
)

export default Index