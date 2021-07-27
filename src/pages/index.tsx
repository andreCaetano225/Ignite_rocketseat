/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { SubscripeButton } from '../SubscribeButton';
import styles from './home.module.scss';
export default function Home() {
  return (
    <>
      <Head>
      <title>Ig News</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br />
            <span>For $9,90 month</span>
          </p>
          <SubscripeButton/>
        </section>

        <img src="./mulher.svg" alt="mulher" />
      </main>
    </>
  )
}
