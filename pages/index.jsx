import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import Banner from '../components/banner/banner.component.jsx'
import Card from '../components/card/card.component.jsx'

import coffeeStoresData from '../data/coffee-stores.json'


export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name='description' content='Discover your local coffee shops!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText='View stores nearby'
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' width={700} height={400} alt="hero-image" />
        </div>

        {
          props.coffeeStores.length > 0 && (
            <>
              <h2 className={styles.heading2}>Toronto stores</h2>
              <div className={styles.cardLayout}>
                {props.coffeeStores.map(coffeeStore => {
                  return (
                    <Card
                      key={coffeeStore.id}
                      name={coffeeStore.name}
                      imgUrl={coffeeStore.imgUrl}
                      href={`/coffee-store/${coffeeStore.id}`}
                      className={styles.card}
                    />
                  )
                })}
              </div>
            </>
          )
        }
      </main>
    </div>
  )
}
