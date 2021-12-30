
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'


const Graph = ({prices, dates}) => {

  return (
    <div className="mt-2 mb-4 pb-2">
      <Line
        data={{
          labels: dates,
          datasets: [{
            label: 'Price of Bitcoin',
            data: prices
        }]
      }}
        width={400}
        height={400}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  )
}

export default Graph