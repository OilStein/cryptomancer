import { unixToDate } from "./timestamp"

const filterPrices = (data) => {
  return data.map(item => item.slice(-1)).flat()
}

const filterDates = (data) => {
  return data.map(item => item.slice(0,1)).flat().map(unixDate => unixToDate(unixDate))
}

export {
  filterDates,
  filterPrices
}