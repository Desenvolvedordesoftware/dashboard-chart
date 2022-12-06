import ApexChart from "react-apexcharts";

/**
 * props
 * - data
 */

export default function Chart(props){

    const options = {
        xaxiis: {
            type:'datetime'
        },
        yaxis: {
            tooltip:{
                enablea: true
            }
        }
    }

    const series = [{
        data: props.data
      }]

    return(
        <ApexChart
        options={options}
        series={series} 
        type="candlestick"
        width={640}
        height={480} />
    )
}