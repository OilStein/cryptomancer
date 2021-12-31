import Layout from "../components/Layouts"
import Form from "../components/Form"
import Info from "../components/Info"
import { useState } from "react"
import { dateToUnixTimestamp} from "../utils/timestamp"
import dynamic from "next/dynamic"
import { getDataPool } from "../services/coinGecko"

// Window error without dynamic import
const Graph = dynamic(() => import('../components/Graph'), {ssr: false})


export const Home = ({initData}) =>  {
  const [data, setData] = useState(initData)

  // Form date format dd-mm-yyyy
  // TODO: Validate dates
  const submit = async (event) => {
    event.preventDefault()
    const target = event.target
    // Must convert to date to get timestamp
    // TODO Make timestamp more accurate
    const from = dateToUnixTimestamp(target.from.value)
    const to = dateToUnixTimestamp(target.to.value, 1)
    const data = await getDataPool(from, to)
    // console.log(data);
    setData(data)
  }

  return (
    <Layout title='Cryptomancer - Home'>
      <Graph data={data}></Graph>
      <Info data={data}></Info>
      <Form submit={submit}></Form>
    </Layout>
  )
}


export const getStaticProps = async () => {
  try {
    const from = new Date()
    from.setMonth(from.getMonth() - 6, 1)
    from.setHours(23, 59)
    console.log(from);
    const to = new Date()
    to.setHours(to.getHours() + 1)
    const data = await getDataPool(dateToUnixTimestamp(from),dateToUnixTimestamp(to))
    return {
      props: {
        initData: data
      }
    }
  } catch (error) {
    console.log({message});
  }
}

export default Home