const getDataPool = async (from , to) => {
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${from}&to=${to}`
  try {
    //console.log(url);
    const res = await fetch(url)
    // returns arrays of date and price
    const data = await res.json()

    return data
    // setData(prices)
    
  } catch (error) {
    console.log(error.message);
  }
}

export {
  getDataPool
}