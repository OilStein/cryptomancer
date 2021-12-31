import Layout from "../components/Layouts"
import Form from "../components/Form"
import { useEffect, useState } from "react"
import { dateToUnixTimestamp, unixToDate } from "../utils/timestamp"
import dynamic from "next/dynamic"

// Window error without dynamic import
const Graph = dynamic(() => import('../components/Graph'), {ssr: false})


export const Home = ({initData}) =>  {
  const [data, setData] = useState(initData)
  const [prices , setPrices] = useState()
  const [dates , setDates] = useState()

  useEffect(() => { 
    const values = data.map(item => item.slice(-1)).flat()
    const dates = data.map(item => item.slice(0,1)).flat().map(unixDate => unixToDate(unixDate))
    setPrices(values)
    setDates(dates)

  }, [data])


  

  const getDataPool = async (from , to) => {
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${from}&to=${to}`
    try {
      //console.log(url);
      const res = await fetch(url)
      // returns arrays of date and price
      const { prices } = await res.json()

      setData(prices)
      
    } catch (error) {
      console.log(error.message);
    }
  }

  // Form date format dd-mm-yyyy
  // TODO: Validate dates
  const submit = (event) => {
    event.preventDefault()
    const target = event.target
    // Must convert to date to get timestamp
    const from = dateToUnixTimestamp(target.from.value)
    const to = dateToUnixTimestamp(target.to.value)

    getDataPool(from, to)

  }

  return (
    <Layout title='Cryptomancer - Home'>
      <Graph prices={prices} dates={dates}></Graph>
      <Form submit={submit}></Form>
    </Layout>
  )
}


export const getStaticProps = async () => {
  try {
    const from = new Date()
    from.setMonth(from.getMonth() - 6)
    const to = new Date()
    to.setHours(to.getHours() - 2)

    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${dateToUnixTimestamp(from)}&to=${dateToUnixTimestamp(to)}`
    const res = await fetch(url)
    // returns arrays of date and price
    const { prices } = await res.json()

    return {
      props: {
        initData: prices
      }
    }
  } catch (error) {
    
  }
}

export default Home