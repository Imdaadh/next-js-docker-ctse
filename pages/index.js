import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Simple Next.js demo! See Which is Done Using Docker,Kubernetes & Google Cloud -IT19148250 <Link href="/cars">Cars</Link>
        </h1>
        </main>
    </div>
  )
}
