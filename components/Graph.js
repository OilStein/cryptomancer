import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import zoomPlugin from 'chartjs-plugin-zoom'

Chart.register(zoomPlugin)

const Graph = ({prices, dates}) => {
  const zoomOptions = {
    limits: {
      x: {min: 'original', max: 'original', minRange: 60 * 100},
    },
    pan: {
      enabled: true,
      mode: 'x',
      modifierKey: 'ctrl',
    },
    zoom: {
      wheel: {
        enabled: true,
      },
      drag: {
        enabled: true,
      },
      pinch: {
        enabled: true
      },
      mode: 'x',
    }
  };
  return (
    <div className="mt-2 mb-4 pb-2">
      <Line
        data={{
          labels: dates,
          datasets: [{
            label: 'Price',
            borderColor: 'rgb(50, 100, 100)',
            backgroundColor: 'rgb(50, 100, 100)',
            pointHoverBackgroundColor:  'rgb(100, 0, 0)',
            pointBorderColor: 'rgb(100, 0, 0)',
            data: prices
        }]
      }}
        width={400}
        height={400}
        options={{
          maintainAspectRatio: false,
          plugins: {
            zoom: zoomOptions
          }
        }}
      />
    </div>
  )
}

export default Graph