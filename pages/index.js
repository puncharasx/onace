import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Infomation from '../components/Infomation'
import Table from '../components/Table'

export default function Home({data}) {
    return (
    <div >
      <Head>
        <title>ONACE - Cryptocurrency</title>
        <meta name="description" content="ONACE - Create by Puncharsx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Table data={data} />
      <Infomation />
      <Footer />
      
    </div>
  )
}

export const getStaticProps = async () =>{
    const url1 = 'https://rest.coinapi.io/v1/assets/icons/50'
    const config1 = {
        method: 'GET',
        headers: {
            'X-CoinAPI-Key': '8AA28346-5533-4A65-BBAC-E5B7E11D7049'
        }
    }
    const url2 = 'https://rest.coinapi.io/v1/assets/'
    const config2 = {
        method: 'GET',
        headers: {
            'X-CoinAPI-Key': '8AA28346-5533-4A65-BBAC-E5B7E11D7049'
        }
    }
    const response1 = await fetch(url1,config1)
    const data1 = await response1.json()
    const response2 = await fetch(url2,config2)
    const data2 = await response2.json()

    const data = []

    try {
      data2.map(d2 => {
        data1.map((d1)=> { 
          if(d2.asset_id === d1.asset_id) {
             const obj = {
               'asset_id': d2.asset_id,
               'name': d2.name,
               'price_usd' : d2.price_usd || false, 
               'url': d1.url
             }
             data.push(obj)
          }
        })
      })
    }catch {
      data[0] = {
        'error' : true
      }
    }
      

    return {
        props: {
          data,
        },
    }
}
