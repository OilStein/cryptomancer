import { unixToDate } from "./timestamp"


// CAn be used prices, market_cap and volumes
const filterValue = (data) => {
  return data.map(item => item.slice(-1)).flat()
}

const filterDates = (data) => {
  return data.map(item => item.slice(0,1)).flat().map(unixDate => unixToDate(unixDate))
}

export {
  filterDates,
  filterValue
}