import { unixToDate } from "../utils/timestamp"
import { filterValue, getBearish } from "../utils/utils"

const Info = ({data}) => {
  const fromValue = unixToDate(data.prices[0][0])
  const toValue = unixToDate(data.prices[data.prices.length-1][0])

  const volumes = filterValue(data.total_volumes)
  const maxVolume = Math.max(...volumes)
  const dateOfMaxVolume =  data.total_volumes.find(item => item[1] === maxVolume)
  
  const prices = filterValue(data.prices)
  const maxPrice = Math.max(...prices)
  const minPrice = Math.min(...prices)
  
  const bearish = getBearish(prices)

  return (
    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="py-8 px-6 shadow-lg border-2 border-gray-400 rounded-lg sm:px-10">
      
        <h3 className="text-4xl mb-2">
          Overview 
        </h3>
        <p className="block text-md font-medium">
          Range {fromValue.substring(0,10)} - {toValue.substring(0,10)}
        </p>
        <div className="flex">
          <h4 className="block text-md font-medium pr-2">Price Range: </h4>
          <p>{minPrice.toFixed(2)}€ - {maxPrice.toFixed(2)}€</p>
        </div>
        <div className="flex">
          <h4 className="block text-md font-medium pr-2">Longest Bearish: </h4>
          <p>{bearish.len}</p>
        </div>
        <div className="flex">
          <h4 className="block text-md font-medium pr-2">Highest Volume: </h4>
          <p>{unixToDate(dateOfMaxVolume[0]).substring(0,10)}: <span>{dateOfMaxVolume[1].toFixed(2)}€</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Info