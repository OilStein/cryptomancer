import Layout from "../components/Layouts"
import Form from "../components/Form"
import { useState } from "react"
import { dateToUnixTimestamp, unixToDate } from "../utils/timestamp"
import Graph from "../components/Graph"



export default function Home() {
  const [prices , setPrices] = useState()
  const [dates , setDates] = useState()
  

  const getDataPool = async (from , to) => {
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${from}&to=${to}`
    try {
      //console.log(url);
      const res = await fetch(url)
      // returns arrays of date and price
      const { prices } = await res.json()


      const values = prices.map(item => item.slice(-1)).flat()
      const dates = prices.map(item => item.slice(0,1)).flat().map(unixDate => unixToDate(unixDate))
      
      setPrices(values)
      setDates(dates)
      
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
