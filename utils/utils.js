import { unixToDate } from "./timestamp"


// CAn be used prices, market_cap and volumes
const filterValue = (data) => {
  return data.map(item => item.slice(-1)).flat()
}

const filterDates = (data) => {
  return data.map(item => item.slice(0,1)).flat().map(unixDate => unixToDate(unixDate))
}

const getBearish = (data = []) => {  
  let longest = []
  let current = []
  const setDefault = (newItem) => {
    if (current.length > longest.length) { 
      longest = current
    }
   current = [newItem]
  };

  for (const item of data) {
    if (current.length && item > current[current.length - 1]) {
      setDefault(item)
    } else {
      current.push(item)
    }
  }
  setDefault()
  return {
    len: longest.length,
    arr: longest
  } 
}




export {
  filterDates,
  filterValue,
  getBearish
}