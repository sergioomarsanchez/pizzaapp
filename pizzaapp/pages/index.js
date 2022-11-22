import Head from 'next/head'
import Image from "next/legacy/image";
import Featured from '../component/Featured'
import PizzaList from '../component/PizzaList';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A pizzas app</title>
        <meta name="description" content="Best pizza ever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
    </div>
  )
}
